// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhVaUjc0-znLHNonG2WvtDFFi7mLUvtOI",
  authDomain: "narecar-2834a.firebaseapp.com",
  databaseURL: "https://narecar-2834a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "narecar-2834a",
  storageBucket: "narecar-2834a.appspot.com",
  messagingSenderId: "778985627142",
  appId: "1:778985627142:web:39ad83c1ba733e567e2d87",
  measurementId: "G-DPR155543X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const database = getDatabase(app);


export default database;