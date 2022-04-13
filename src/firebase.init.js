// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3HshdKDq2ML7UI_Qu8uIoelKijbhp9Tw",
    authDomain: "ema-jhon-simple-36284.firebaseapp.com",
    projectId: "ema-jhon-simple-36284",
    storageBucket: "ema-jhon-simple-36284.appspot.com",
    messagingSenderId: "189722236031",
    appId: "1:189722236031:web:845570a71e7a7cacf6db4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth ;