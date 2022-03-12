import {app} from "../firebase"
import {getStorage, ref, uploadString, uploadBytes} from "firebase/storage"
import {v4 as uuidv4} from 'uuid';
import {getUserDoc, linkImageID2UserID} from "./DbService";

//Create root reference
const storage = getStorage(app)


//upload

// uploadString(Sref, "String saved in data", "txt")


export async function uploadEncodedString(userID, blob) {
    const attrName = "photoCount"
    console.log("Upload Encoded String called")
    //Get latest photoCount from userTable
    let userDocSnap = await getUserDoc(userID)

    //store photoCount
    let photoCount = userDocSnap.get(attrName)


    //Create reference

    //Image is going to be stored in images/userID/imageID format
    const imageRef = ref(storage, "images/" + userID + "/" + photoCount + ".png")

    //Uploading
    await uploadBytes(imageRef, blob)

    //Linking the Image with User in Table
    await linkImageID2UserID(userID, photoCount + "", photoCount)

}