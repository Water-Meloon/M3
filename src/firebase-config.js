// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMc_tCYeQiTSmalO5Mya5Dh72AjJP0avg",
  authDomain: "my-first-project-be38e.firebaseapp.com",
  projectId: "my-first-project-be38e",
  storageBucket: "my-first-project-be38e.appspot.com",
  messagingSenderId: "52713403116",
  appId: "1:52713403116:web:8edb82df717ca126b02bc9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);