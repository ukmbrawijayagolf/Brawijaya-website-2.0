import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC4xirvh_REklPAV9i3PP0RzG2dY6yIk5Y",
  authDomain: "brawijayagroup.firebaseapp.com",
  projectId: "brawijayagroup",
  storageBucket: "brawijayagroup.firebasestorage.app",
  messagingSenderId: "875959679313",
  appId: "1:875959679313:web:da4a3110a9d961258e7b70",
  measurementId: "G-QBXF2503Q5"
};

// Check if credentials are user-configured
export const isFirebaseConfigured = Boolean(
  import.meta.env.VITE_FIREBASE_API_KEY && 
  import.meta.env.VITE_FIREBASE_PROJECT_ID
);

// Initialize Firebase safely
let app;
let db = null;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  db = getFirestore(app);
} catch (error) {
  console.warn("Firebase initialization note: Running with local dynamic storage fallback.", error);
}

export { app, db };
