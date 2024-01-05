// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3-ruCBG3elSwvvE7t-xb9_EvJJAevp-4",
  authDomain: "reactgramcomfirebase.firebaseapp.com",
  projectId: "reactgramcomfirebase",
  storageBucket: "reactgramcomfirebase.appspot.com",
  messagingSenderId: "411574777584",
  appId: "1:411574777584:web:e6bc2dccc054faef793435",
  measurementId: "G-X70C6SS628"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const analytics = getAnalytics(app);