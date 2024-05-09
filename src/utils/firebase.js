// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRHhxgX4MmBsrceboyo6DSJuZmCqBwCA",
  authDomain: "test-bfc8f.firebaseapp.com",
  projectId: "test-bfc8f",
  storageBucket: "test-bfc8f.appspot.com",
  messagingSenderId: "318655394059",
  appId: "1:318655394059:web:3174f3c0dabf196e8e720e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;