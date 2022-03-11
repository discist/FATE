import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getAuth , setPersistence , inMemoryPersistence } from "firebase/auth";



const config = {
    apiKey: "AIzaSyBIVTZea4hrqE5GwuFiAJIh2MTpUL0lk8U",
    authDomain: "fateten.firebaseapp.com",
    projectId: "fateten",
    storageBucket: "fateten.appspot.com",
    messagingSenderId: "1022980228718",
    appId: "1:1022980228718:web:25698d8d9038c734f0487f"
  };

  export const app = initializeApp(config , "CLIENT")

  export const auth = getAuth(app)


  export const db =  getDatabase(app)

  console.log(db);

  

  setPersistence(auth , inMemoryPersistence)