import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBod0QCJRpGGHHfHrsdydnsyKfa_9ZPhz4",
  authDomain: "means-3857f.firebaseapp.com",
  projectId: "means-3857f",
  storageBucket: "means-3857f.appspot.com",
  messagingSenderId: "837933377196",
  appId: "1:837933377196:web:546e75634e383dfc272109",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
