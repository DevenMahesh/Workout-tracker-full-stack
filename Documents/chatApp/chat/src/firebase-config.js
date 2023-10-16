// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTXNn4phSLldz4ko6DtfKpcrrvgIPuLzc",
  authDomain: "chatapp-760c9.firebaseapp.com",
  projectId: "chatapp-760c9",
  storageBucket: "chatapp-760c9.appspot.com",
  messagingSenderId: "403604971852",
  appId: "1:403604971852:web:f8372ea8b0fcc6f6e86fe9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);