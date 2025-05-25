import {initializeApp, getApp, getApps} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8p4IhPGEG8h7VidgeXa3UagzlOpx2Lvg",
    authDomain: "mockmate-ae484.firebaseapp.com",
    projectId: "mockmate-ae484",
    storageBucket: "mockmate-ae484.firebasestorage.app",
    messagingSenderId: "397160468373",
    appId: "1:397160468373:web:2cd8fa897f96bb4a88709c",
    measurementId: "G-SZJ78KK493"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);