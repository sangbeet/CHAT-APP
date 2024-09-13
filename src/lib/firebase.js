import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage}  from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDkktvERxwMATeB3RyUFtgqs3TfLxb3EXE",
  authDomain: "reactchat-378db.firebaseapp.com",
  projectId: "reactchat-378db",
  storageBucket: "reactchat-378db.appspot.com",
  messagingSenderId: "1061133804958",
  appId: "1:1061133804958:web:6920811db3d8617a4da28f"
};
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()
