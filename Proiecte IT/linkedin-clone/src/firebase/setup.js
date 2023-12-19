// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth" 
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBUcVg9rFdjgTQz8IjQ5runvcqwJXYZ83Q",
  authDomain: "linkedin-clone-56c11.firebaseapp.com",
  projectId: "linkedin-clone-56c11",
  storageBucket: "linkedin-clone-56c11.appspot.com",
  messagingSenderId: "748430281093",
  appId: "1:748430281093:web:fe9b63cecf3a1e00435cec",
  measurementId: "G-RY97XTBJ7G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)
