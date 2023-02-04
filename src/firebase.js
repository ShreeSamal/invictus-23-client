// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOdXA6Z62QOlcZpZEpft3nSGSD38V77-c",
  authDomain: "invictus-23-b89c6.firebaseapp.com",
  projectId: "invictus-23-b89c6",
  storageBucket: "invictus-23-b89c6.appspot.com",
  messagingSenderId: "560286311168",
  appId: "1:560286311168:web:13ca0cc620584d917789e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
