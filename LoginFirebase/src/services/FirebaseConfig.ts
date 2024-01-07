// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlWPaIUummB62pmJrXDtxzzq8Eo_g4_PY",
  authDomain: "logincomfirebase-2e72c.firebaseapp.com",
  projectId: "logincomfirebase-2e72c",
  storageBucket: "logincomfirebase-2e72c.appspot.com",
  messagingSenderId: "1010544769856",
  appId: "1:1010544769856:web:c99e539f8f4e8b6b6a18a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
