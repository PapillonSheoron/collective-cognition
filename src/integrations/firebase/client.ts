import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjYwTBNUYyKKTdGKTpEWILhs_EVQSd6Qg",
  authDomain: "manhatten-bc139.firebaseapp.com",
  projectId: "manhatten-bc139",
  storageBucket: "manhatten-bc139.firebasestorage.app",
  messagingSenderId: "929146551110",
  appId: "1:929146551110:web:8d6eb1274eb21a889d4347",
  measurementId: "G-2HWMJL76LP",
};

const app = initializeApp(firebaseConfig);

// Guard analytics since it requires a browser environment
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : undefined;

export const db = getFirestore(app);
