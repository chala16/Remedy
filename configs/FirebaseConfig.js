// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhqO2XdfkvLi7EmOlyuVPqO7UuYNSHg48",
  authDomain: "remedy-f40f4.firebaseapp.com",
  projectId: "remedy-f40f4",
  storageBucket: "remedy-f40f4.appspot.com",
  messagingSenderId: "578494770714",
  appId: "1:578494770714:web:87ac6fbf0eaf24ce63aba3",
  measurementId: "G-XYQLBFH130"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);