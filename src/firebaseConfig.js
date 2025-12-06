import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// --- REPLACE THIS WITH YOUR OWN FIREBASE CONFIG KEYS ---
// Go to console.firebase.google.com -> Create Project -> Web App (</>)
const firebaseConfig = {
 apiKey: "AIzaSyB4bkY_eL84z30P6N0HtDl6c5ZhF4NEjwU",
  authDomain: "bhartdarshan-b8b8c.firebaseapp.com",
  projectId: "bhartdarshan-b8b8c",
  storageBucket: "bhartdarshan-b8b8c.firebasestorage.app",
  messagingSenderId: "833264992518",
  appId: "1:833264992518:web:51a57512914ec5573c9e87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();