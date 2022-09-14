// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuAZ2Zb93eIdNE9bMwqGVNiA4JHx8TmSA",
  authDomain: "altschool-project.firebaseapp.com",
  projectId: "altschool-project",
  storageBucket: "altschool-project.appspot.com",
  messagingSenderId: "913019745393",
  appId: "1:913019745393:web:3561e5f21f7bde6bd517d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
};
