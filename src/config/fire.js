// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxvgDk1lNDQWOlprCibt7mkGCPwKsw5_Y",
  authDomain: "onlinenoodle-c7b8b.firebaseapp.com",
  databaseURL: "https://onlinenoodle-c7b8b-default-rtdb.firebaseio.com",
  projectId: "onlinenoodle-c7b8b",
  storageBucket: "onlinenoodle-c7b8b.appspot.com",
  messagingSenderId: "547348314049",
  appId: "1:547348314049:web:141d06dba160e2f42ae140",
  measurementId: "G-HMN04ZTFDW"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(fire);
export default fire;