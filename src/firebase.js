// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3433b.firebaseapp.com",
  projectId: "mern-estate-3433b",
  storageBucket: "mern-estate-3433b.appspot.com",
  messagingSenderId: "606654259318",
  appId: "1:606654259318:web:bb3ea8947b632fc2157f57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
