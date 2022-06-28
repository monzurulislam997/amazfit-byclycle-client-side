// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxrdj3uuQ5IWVfo8wiL_Ub8bZO7ZP1Wks",
    authDomain: "amazfit-bicycle-yoko.firebaseapp.com",
    projectId: "amazfit-bicycle-yoko",
    storageBucket: "amazfit-bicycle-yoko.appspot.com",
    messagingSenderId: "218485501103",
    appId: "1:218485501103:web:2e9700cb61ff02b772385a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;