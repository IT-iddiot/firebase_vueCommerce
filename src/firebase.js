import firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHPY_79avK-QB4Agi7d5yr8-N7fulzW5I",
    authDomain: "darrenter-ecommerce.firebaseapp.com",
    databaseURL: "https://darrenter-ecommerce.firebaseio.com",
    projectId: "darrenter-ecommerce",
    storageBucket: "darrenter-ecommerce.appspot.com",
    messagingSenderId: "978036201784",
    appId: "1:978036201784:web:3186be4fe115d1a13989cd",
    measurementId: "G-T3BFLZGY1Y"
  };
  // Initialize Firebase
  // export it before import in any file to prevent error : Cannot read property 'auth' of undefined"
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  firebase.analytics();

  export {fb, db};