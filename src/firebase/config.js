// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBunSO5nn04Yxsl3v05KPs4RgzsnUVqDoI",
  authDomain: "ecommerce-65902.firebaseapp.com",
  projectId: "ecommerce-65902",
  storageBucket: "ecommerce-65902.appspot.com",
  messagingSenderId: "582237577248",
  appId: "1:582237577248:web:d4497d9c8253c453925c45",
  measurementId: "G-9SKTJ80BDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);