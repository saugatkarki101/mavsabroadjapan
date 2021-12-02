// Code for the firebase domain

//import functions from the firebase
import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcqMnmUFqZR3hMweRHnnDbHifeCVNx96I",
  authDomain: "mavsabroadjapan-e105a.firebaseapp.com",
  projectId: "mavsabroadjapan-e105a",
  storageBucket: "mavsabroadjapan-e105a.appspot.com",
  messagingSenderId: "685420431938",
  appId: "1:685420431938:web:f57a1a85d092dd56d0bbdb",
  measurementId: "G-84WQ8DL91P"
};

// Initialize Firebase functions
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
const database = getDatabase();
//export variables to other js files
export {
  auth,
  db,
  storage,
  database
};
