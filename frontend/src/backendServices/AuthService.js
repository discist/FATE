import {auth} from "../firebase";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";


const provider = new GoogleAuthProvider();

/**
 * @returns Returns returns {data : ** , access : true/false}
 * access is false if it fails to authenticate and data is going to be the error message
 * access is true if it is successfully authenticated and data is going to be the result object
 */
export async function showGoogleSigninPop() {
    console.log("Show Google Sign in popup called")
    let obj = {
        data: null,
        access: false
    }
    try {
        let tempData = await signInWithPopup(auth, provider)
        obj.data = tempData;
        obj.access = true;
    } catch (error) {
        obj.data = error.message;
        obj.access = false
    }

    return obj;
}


/*
UID
Database user table
Name
Date of birth
Place of birth
Time of birth
Gender
 */