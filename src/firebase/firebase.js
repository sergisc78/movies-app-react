// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCuqjbv74RZGJZ1M62m_FvYT0Gv_m4lq-4",
  authDomain: "movie-app-react-c91f6.firebaseapp.com",
  projectId: "movie-app-react-c91f6",
  storageBucket: "movie-app-react-c91f6.appspot.com",
  messagingSenderId: "764530757791",
  appId: "1:764530757791:web:c2fc12896abde0696552aa",
  measurementId: "G-9GE3MCWY4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)