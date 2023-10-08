import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpPFyI7gNwO1t_6m9-VGgeHjS6jArHoNE",
  authDomain: "quiz-8cf83.firebaseapp.com",
  projectId: "quiz-8cf83",
  storageBucket: "quiz-8cf83.appspot.com",
  messagingSenderId: "656268644693",
  appId: "1:656268644693:web:fab4a9e0cb7d8c0b0bdfdc",
  measurementId: "G-ZH60V2HKTH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const database = getDatabase(app);

export {
  db,
  analytics,
  auth,
  database,
  ref,
  set,
  onValue,
  setPersistence, // <-- Export it
  browserLocalPersistence, // <-- Export it
};
