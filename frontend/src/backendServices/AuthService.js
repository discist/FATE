import {auth} from "../firebase";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {addOrUpdateUser} from "./DbService";





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

        //Try to create record in database if it doesn't exist
        let docRecord = await addOrUpdateUser(tempData.user.uid, {})
        if (!docRecord.success) {
            //Return with new error from database
            obj.data = docRecord.data
            obj.access = false;
            return obj;
        }

    } catch (error) {
        obj.data = error.message;
        obj.access = false
    }

    return obj;
}
