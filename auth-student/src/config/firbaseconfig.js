// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKOiCVylb4an10vP7AzNRi-Qwdvjppr20",
  authDomain: "authnetication-student.firebaseapp.com",
  projectId: "authnetication-student",
  storageBucket: "authnetication-student.appspot.com",
  messagingSenderId: "335251210121",
  appId: "1:335251210121:web:5a87f20d943ae54edc2b58",
  measurementId: "G-6HZ0EBMRYL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const GoogleauthProvider = new GoogleAuthProvider()