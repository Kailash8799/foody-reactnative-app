// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB-4-C0gFv5I__LPepNi4Ag58EzsrCEy5Q",
  authDomain: "foodyapp-1d46c.firebaseapp.com",
  databaseURL: "https://foodyapp-1d46c-default-rtdb.firebaseio.com",
  projectId: "foodyapp-1d46c",
  storageBucket: "foodyapp-1d46c.appspot.com",
  messagingSenderId: "297481251838",
  appId: "1:297481251838:web:8a85c13c44aba14a412eaf",
  measurementId: "G-76Z2C9QM6W"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const storage = getStorage();

export const dbcon = getFirestore(analytics)