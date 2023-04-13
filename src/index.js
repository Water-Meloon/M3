import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyAMc_tCYeQiTSmalO5Mya5Dh72AjJP0avg",
//   authDomain: "my-first-project-be38e.firebaseapp.com",
//   projectId: "my-first-project-be38e",
//   storageBucket: "my-first-project-be38e.appspot.com",
//   messagingSenderId: "52713403116",
//   appId: "1:52713403116:web:8edb82df717ca126b02bc9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// onAuthStateChanged(auth,user=>{
//   if (user!=null){
//     console.log('logged in.')
//   }else{
//     console.log('no user.')
//   }
// });

// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
