import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmuu0JKCQfAygh_5p25b1Yjo7z63BAIJ8",
    authDomain: "chat-clone-c3107.firebaseapp.com",
    databaseURL: "https://chat-clone-c3107-default-rtdb.firebaseio.com",
    projectId: "chat-clone-c3107",
    storageBucket: "chat-clone-c3107.appspot.com",
    messagingSenderId: "509825076190",
    appId: "1:509825076190:web:cf5d0abd18190e24dc2b4f",
    measurementId: "G-HBVCTK75P1"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();