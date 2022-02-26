import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, sendPasswordResetEmail} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlOnqtIa5-G9ZiN7AoX4Ixms67gE2UYtU",
  authDomain: "mailchimp-development-c3102.firebaseapp.com",
  projectId: "mailchimp-development-c3102",
  storageBucket: "mailchimp-development-c3102.appspot.com",
  messagingSenderId: "693447541801",
  appId: "1:693447541801:web:cd44bd38aa74cc6995c838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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

