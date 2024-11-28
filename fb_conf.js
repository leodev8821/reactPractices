//import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
/* Firebase */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ0k7ttW4C7PCkQ2ieO5PlVCbYQ82fKm4",
    authDomain: "react-firebase-b22c4.firebaseapp.com",
    projectId: "react-firebase-b22c4",
    storageBucket: "react-firebase-b22c4.firebasestorage.app",
    messagingSenderId: "248822618258",
    appId: "1:248822618258:web:7a304e8eaff4e472726e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
