import { initializeApp, getApps, getApp } from 'firebase/app';
import  { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKOKbFXnA1tPSivh8hzZZdKHKLc19tuT4",
    authDomain: "friendlychat-21baa.firebaseapp.com",
    databaseURL: "https://friendlychat-21baa.firebaseio.com",
    projectId: "friendlychat-21baa",
    storageBucket: "friendlychat-21baa.appspot.com",
    messagingSenderId: "360653608130",
    appId: "1:360653608130:web:fbde06937017329229d75b"
  };
  
  // Initialize Firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore();
  const storage = getStorage();

  export { app, storage, db}