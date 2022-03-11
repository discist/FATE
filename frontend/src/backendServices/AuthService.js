import {auth} from "../firebase";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";


const provider = new GoogleAuthProvider();


export function showGoogleSigninPop() {
    console.log("Show Google Sign in popup called")

    signInWithPopup(auth, provider).then((result) => {
        console.log(result.user)
        result.user;

    }).catch((error) => {
        //Handling errors
        console.log(error.message + " Code is : " + error.code)
    });
}