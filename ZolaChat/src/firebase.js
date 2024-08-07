// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5Bs_VKB6XhGOPUgaKXejtL2LBvwyiIu8",
  authDomain: "zola-chat-230e4.firebaseapp.com",
  databaseURL:
    "https://zola-chat-230e4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "zola-chat-230e4",
  storageBucket: "zola-chat-230e4.appspot.com",
  messagingSenderId: "509550464946",
  appId: "1:509550464946:web:559c1f86bcd34f3bdb1eab",
  measurementId: "G-ZGD10TEY6B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
