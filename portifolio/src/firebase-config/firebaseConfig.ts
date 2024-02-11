// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeQ2-o2TASXDQfbRO7RZRFq9qqrRvE_L8",
  authDomain: "programadoremanuelbim.firebaseapp.com",
  projectId: "programadoremanuelbim",
  storageBucket: "programadoremanuelbim.appspot.com",
  messagingSenderId: "976192296094",
  appId: "1:976192296094:web:2bfe562ecfef0b8a2f578f",
  measurementId: "G-GSB8SGJ7VB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// dataBase
export const db = getFirestore(app);
