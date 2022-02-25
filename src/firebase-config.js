// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'


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