// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyEsexXkv3JitLNMu2FF-lF3lgDrUojKQ",
    authDomain: "ema-john-simple-6b096.firebaseapp.com",
    projectId: "ema-john-simple-6b096",
    storageBucket: "ema-john-simple-6b096.appspot.com",
    messagingSenderId: "270450825885",
    appId: "1:270450825885:web:b927b4ee89d15491ce9274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;