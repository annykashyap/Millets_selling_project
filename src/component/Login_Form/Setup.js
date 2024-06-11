import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBzYzPuuRklWXqCUfTdy3WNmlONEekZaJ8",
  authDomain: "login-app-cdbbd.firebaseapp.com",
  projectId: "login-app-cdbbd",
  storageBucket: "login-app-cdbbd.appspot.com",
  messagingSenderId: "592309407165",
  appId: "1:592309407165:web:f965b9db470c6daed9d6d4"
};

const app = initializeApp(firebaseConfig);
export  const auth =getAuth(app)