import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import fs from 'fs';
import csv from 'csv-parser';
import { readFile } from 'fs/promises';

const serviceAccount = JSON.parse(
  await readFile(new URL('./serviceAccountKey.json', import.meta.url))
);

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const auth = getAuth();

async function importCSVAndCreateAuth() {
  const results = [];
  
  fs.createReadStream('firebase_users_ubg.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      console.log('Mulai mengunggah data dan membuat Akun Auth...');
      let count = 0;
      
      for (const row of results) {
        const email = row.email.trim().toLowerCase();
        const nim = row.nim ? row.nim.trim() : ''; 
        const docId = email.replace(/[^a-zA-Z0-9]/g, '_');
        
        // 1. Simpan/Update Data di Firestore
        await db.collection('users').doc(docId).set({
          email: email,
          nama: row.nama,
          fakultas: row.fakultas,
          nim: nim,
          role: row.role,
          createdAt: FieldValue.serverTimestamp()
        }, { merge: true });

        // 2. Buat Akun Firebase Auth jika NIM tersedia
        let userRecord = null;
        if (nim && nim.length >= 6) {
          try {
            userRecord = await auth.createUser({
              email: email,
              password: nim, // Password berupa NIM
              displayName: row.nama
            });
            console.log(`[AUTH & FIRESTORE OK] ${row.nama}`);
          } catch (error) {
            if (error.code === 'auth/email-already-exists') {
              // Jika akun sudah ada, update password ke NIM
              userRecord = await auth.getUserByEmail(email);
              await auth.updateUser(userRecord.uid, { password: nim });
              console.log(`[AUTH UPDATED PASSWORD] ${row.nama}`);
            } else {
              console.error(`[AUTH ERROR] ${row.nama}: ${error.message}`);
            }
          }
        }

        if (userRecord) {
          const adminRef = db.collection('admin_users').doc(userRecord.uid);
          if (String(row.role).trim().toLowerCase() === 'admin') {
            await adminRef.set({ email, role: 'admin' }, { merge: true });
          } else {
            await adminRef.delete();
          }
        }

        count++;
      }
      
      console.log(' Import dan pembuatan akun Auth Selesai!');
    });
}

importCSVAndCreateAuth();