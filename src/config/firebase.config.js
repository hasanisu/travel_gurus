// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByi6NLnQ7vX5gSJ7Pyndafqd2ShAOGbcw",
  authDomain: "travel-guru-8773f.firebaseapp.com",
  projectId: "travel-guru-8773f",
  storageBucket: "travel-guru-8773f.appspot.com",
  messagingSenderId: "1043366917052",
  appId: "1:1043366917052:web:29747ee34e2a3eb7d6f1b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app);