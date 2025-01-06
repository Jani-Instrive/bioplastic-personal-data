// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf9l4bHC-CBzL5M0T9mA47ZEOm8bjiE_o",
  authDomain: "qr-intiyaz-data.firebaseapp.com",
  projectId: "qr-intiyaz-data",
  storageBucket: "qr-intiyaz-data.firebasestorage.app",
  messagingSenderId: "765763203550",
  appId: "1:765763203550:web:0f1767ffb56edd1b216d4f",
  measurementId: "G-GWEL6TTFY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };