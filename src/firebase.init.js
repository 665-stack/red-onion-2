// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxkS1WgHpl_IaZ1CMEF2M8ZrUIHqtM6nA",
    authDomain: "red-onion-2-f752e.firebaseapp.com",
    projectId: "red-onion-2-f752e",
    storageBucket: "red-onion-2-f752e.appspot.com",
    messagingSenderId: "635899910031",
    appId: "1:635899910031:web:941fa0b35ba8d34c479dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;