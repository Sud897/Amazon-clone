import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAc3Dg1oGJ7u68D5l0igrf2aE4ZJRUkrfk",
  authDomain: "app-88579.firebaseapp.com",
  projectId: "app-88579",
  storageBucket: "app-88579.appspot.com",
  messagingSenderId: "348954760112",
  appId: "1:348954760112:web:11f0a392dfe642397e3c75",
  measurementId: "G-DE7WK33EZX",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
