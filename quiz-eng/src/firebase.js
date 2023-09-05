import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
