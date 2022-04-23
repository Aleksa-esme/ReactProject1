import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBZMd3c-GsLiZl6amUXXchVDv-H2E5cQeU",
  authDomain: "botchat-75158.firebaseapp.com",
  databaseURL: "https://botchat-75158-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "botchat-75158",
  storageBucket: "botchat-75158.appspot.com",
  messagingSenderId: "223368807752",
  appId: "1:223368807752:web:e98a086b2fa945570e5f7d"
};


export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const database = getDatabase(firebase);