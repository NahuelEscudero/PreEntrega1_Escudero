import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDeO1l4CaDDB-TVjJfMtYx1hIWcBwKsUk",
  authDomain: "insidia-ind.firebaseapp.com",
  projectId: "insidia-ind",
  storageBucket: "insidia-ind.appspot.com",
  messagingSenderId: "555780154438",
  appId: "1:555780154438:web:55ea27da7a98faa394d647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);