import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_G4DXerz9HgYjXHUgk_bb58iYWbqgKxA",
  authDomain: "admin-e6443.firebaseapp.com",
  projectId: "admin-e6443",
  storageBucket: "admin-e6443.appspot.com",
  messagingSenderId: "828748918398",
  appId: "1:828748918398:web:54a4f37fe96bf0af30b22f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
