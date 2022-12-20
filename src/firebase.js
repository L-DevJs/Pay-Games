// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZZSNji4XEBMPrSlSfyuK9rzK5sO6mxio",
  authDomain: "apuestasdeportivas-4ccbd.firebaseapp.com",
  projectId: "apuestasdeportivas-4ccbd",
  storageBucket: "apuestasdeportivas-4ccbd.appspot.com",
  messagingSenderId: "871826955692",
  appId: "1:871826955692:web:53dcb74de8e91cbf142e09",
  measurementId: "G-EXDC9K9C62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
