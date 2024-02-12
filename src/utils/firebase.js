// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK5Q-F0L0KKR14RG7F90x5uMH_XtVa8_g",
  authDomain: "netflix-5a908.firebaseapp.com",
  projectId: "netflix-5a908",
  storageBucket: "netflix-5a908.appspot.com",
  messagingSenderId: "725908668832",
  appId: "1:725908668832:web:826cc6b4161aab33b6a4c5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();