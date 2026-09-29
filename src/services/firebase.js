import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbPe2E-nIoMYgsmBFBkXNLhd7DaO4HBRA",
  authDomain: "brawijayagolf.firebaseapp.com",
  projectId: "brawijayagolf",
  storageBucket: "brawijayagolf.firebasestorage.app",
  messagingSenderId: "570123219108",
  appId: "1:570123219108:web:5f53dc6064b302f8d6b631",
  measurementId: "G-X58M79DDHH"
};

export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

const app = isFirebaseConfigured
  ? (!getApps().length ? initializeApp(firebaseConfig) : getApp())
  : null;
export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;