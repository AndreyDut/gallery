import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9eVvlG6ymg2K3AXxXO5vWH3V01rXrTcU",
  authDomain: "gallery-6b684.firebaseapp.com",
  projectId: "gallery-6b684",
  storageBucket: "gallery-6b684.appspot.com",
  messagingSenderId: "385649158647",
  appId: "1:385649158647:web:f6c3442175d45a38c4e6f2",
  measurementId: "G-FR8932TSF5",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
