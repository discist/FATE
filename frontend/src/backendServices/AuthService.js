import {auth} from "../firebase";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";


const provider = new GoogleAuthProvider();


export function showGoogleSigninPop() {
    console.log("Show Google Sign in popup called")

    signInWithPopup(auth, provider).then((result) => {
        //Gives us the Google Access Token. You can use it to access the Google API
        const credential = GoogleAuthProvider.credentialFromError(result);

        const token = credential.accessToken;

        const user = result.user;

        console.log("result : " + result)
        console.log("Google credential : " + credential)


    }).catch((error) => {
        //Handling errors
        console.log(error.message + " Code is : " + error.code)
    });
}