// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCezKH1CxnkyIgPl64GIBZsEKL_bnFcHPs",
  authDomain: "budgetbank-d4512.firebaseapp.com",
  projectId: "budgetbank-d4512",
  storageBucket: "budgetbank-d4512.appspot.com",
  messagingSenderId: "1098047532086",
  appId: "1:1098047532086:web:601ec7bb80e56cb6adbc97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;