// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6wbw8pa7i8rU5BeQY9kF5GeT6ybhhVZU",
  authDomain: "react-dragon-news-auth-5508d.firebaseapp.com",
  projectId: "react-dragon-news-auth-5508d",
  storageBucket: "react-dragon-news-auth-5508d.appspot.com",
  messagingSenderId: "617874017948",
  appId: "1:617874017948:web:ffc944f257f012cc566759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;