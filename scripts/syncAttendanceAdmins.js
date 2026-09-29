import { initializeApp, cert } from "firebase-admin/app";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";
import fs from "node:fs";
import csv from "csv-parser";
import { readFile } from "node:fs/promises";

const serviceAccount = JSON.parse(
  (await readFile(new URL("../serviceAccountKey.json", import.meta.url))).toString("utf8")
);

initializeApp({ credential: cert(serviceAccount) });

const db = getFirestore();
const auth = getAuth();

function readMembers() {
  return new Promise((resolve, reject) => {
    const members = [];
    fs.createReadStream(new URL("../firebase_users_ubg.csv", import.meta.url))
      .pipe(csv())
      .on("data", (row) => members.push(row))
      .on("error", reject)
      .on("end", () => resolve(members));
  });
}

const members = await readMembers();
const adminCollection = db.collection("admin_users");
const expectedAdminUids = new Set();

for (const member of members) {
  if (String(member.role).trim().toLowerCase() !== "admin") continue;

  const email = String(member.email || "").trim().toLowerCase();
  if (!email) continue;

  try {
    const user = await auth.getUserByEmail(email);
    expectedAdminUids.add(user.uid);
    await adminCollection.doc(user.uid).set({
      email,
      role: "admin",
      syncedAt: FieldValue.serverTimestamp()
    });
    console.log(`Admin presensi aktif: ${email}`);
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      console.warn(`Akun Auth belum ada, dilewati: ${email}`);
    } else {
      throw error;
    }
  }
}

const existingAdmins = await adminCollection.get();
for (const adminDocument of existingAdmins.docs) {
  if (!expectedAdminUids.has(adminDocument.id)) {
    await adminDocument.ref.delete();
    console.log(`Akses admin dicabut: ${adminDocument.get("email") || adminDocument.id}`);
  }
}

console.log("Sinkronisasi admin presensi selesai.");