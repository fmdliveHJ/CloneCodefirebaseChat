import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD47PRUvLlpIYd4tq6Ftlg0M1iVWm6YSzE",
  authDomain: "fmdlive-firebase.firebaseapp.com",
  projectId: "fmdlive-firebase",
  storageBucket: "fmdlive-firebase.appspot.com",
  messagingSenderId: "1032419605516",
  appId: "1:1032419605516:web:ae527eb562e36f6979c229",
  measurementId: "G-1B1HFTBVNP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
