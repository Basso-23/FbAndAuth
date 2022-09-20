import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA93SpVd3xCiMJo1NyAmxW0MTZ2PN9gEKY",
  authDomain: "fbandauth.firebaseapp.com",
  projectId: "fbandauth",
  storageBucket: "fbandauth.appspot.com",
  messagingSenderId: "287273195697",
  appId: "1:287273195697:web:38b2bd9a33afb57ae86a90",
  measurementId: "G-CKMT2FF3WM"
  }; 

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};