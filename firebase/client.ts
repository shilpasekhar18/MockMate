import { initializeApp, getApp , getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSZWDw4_ZE9Ezm_N7UUrs11qpLe4MFChQ",
  authDomain: "mockmate-fb29d.firebaseapp.com",
  projectId: "mockmate-fb29d",
  storageBucket: "mockmate-fb29d.firebasestorage.app",
  messagingSenderId: "180586930884",
  appId: "1:180586930884:web:b1bf1206b83d6b2ea41f91",
  measurementId: "G-STL22W4ZTJ"
};

// Initialize Firebase
const app = 
!getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);