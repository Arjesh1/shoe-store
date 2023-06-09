// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.React_APP_APIKEY ,
  authDomain: process.env.React_APP_AUTHDOMAIN ,
  projectId: process.env.React_APP_PROJECTID ,
  storageBucket: process.env.React_APP_STORAGEBUCKET,
  messagingSenderId: process.env.React_APP_MESSAGINGSENDERID,
  appId: process.env.React_APP_APPID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);