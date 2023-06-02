// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYRozjolJ2W9tUU7CJHieSeKvOM2SaFXk",
  authDomain: "foody-8cddf.firebaseapp.com",
  projectId: "foody-8cddf",
  storageBucket: "foody-8cddf.appspot.com",
  messagingSenderId: "857279154045",
  appId: "1:857279154045:web:7bb50ffa723ed07551ee14",
  measurementId: "G-KWEK1ZPHH6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);