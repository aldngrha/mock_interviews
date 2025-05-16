// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqdtb_6AbbatwmXJkA8QHrEwt8WosxXKo",
  authDomain: "prepwise-9fc67.firebaseapp.com",
  projectId: "prepwise-9fc67",
  storageBucket: "prepwise-9fc67.firebasestorage.app",
  messagingSenderId: "975332080509",
  appId: "1:975332080509:web:348ae28586f7fcc2d0ea14",
  measurementId: "G-8DM6CSHL75",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
