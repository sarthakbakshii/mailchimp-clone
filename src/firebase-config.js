// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, signOut, sendPasswordResetEmail} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDFDwoiI8yb0mqv7ia-LMpqbRfaMFAJbAU",
  authDomain: "mailchimp-clone.firebaseapp.com",
  projectId: "mailchimp-clone",
  storageBucket: "mailchimp-clone.appspot.com",
  messagingSenderId: "793024047166",
  appId: "1:793024047166:web:be4ff2663127c954eb896f",
  measurementId: "G-TWDSSYPL77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
const auth = getAuth()

export const signup=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

export const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

export const resetpassword=(email)=>{
    return sendPasswordResetEmail(auth,email)
}

export const logout=(email)=>{
    return signOut(auth)
}