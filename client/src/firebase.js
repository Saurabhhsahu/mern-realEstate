// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-c9da8.firebaseapp.com",
  projectId: "mern-realestate-c9da8",
  storageBucket: "mern-realestate-c9da8.appspot.com",
  messagingSenderId: "250714973258",
  appId: "1:250714973258:web:600d0c65ad832325a1b2b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);