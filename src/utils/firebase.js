// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw2TAd6lurX0IzDyA3PR4gXhJvjOeUR3A",
  authDomain: "netfixgpt-81708.firebaseapp.com",
  projectId: "netfixgpt-81708",
  storageBucket: "netfixgpt-81708.firebasestorage.app",
  messagingSenderId: "151921261640",
  appId: "1:151921261640:web:cca01ee281232032556c7d",
  measurementId: "G-1WYQFWCCPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);