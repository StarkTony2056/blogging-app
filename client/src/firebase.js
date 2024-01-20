// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a2410.firebaseapp.com",
  projectId: "mern-blog-a2410",
  storageBucket: "mern-blog-a2410.appspot.com",
  messagingSenderId: "746681692232",
  appId: "1:746681692232:web:f3b4679e3e52127214287d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);