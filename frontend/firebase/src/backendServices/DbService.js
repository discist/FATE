import {db} from "../firebase"
import {addDoc, collection, doc, getDoc, setDoc, updateDoc} from "firebase/firestore";

const userTable = "users"
const photoTable = "photos"

export async function test() {

    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Ada",
            last: "Lovelace",
            born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


/**
 * Creates If no record exist, updates/adds data if there is already a record
 * @param id The ID of the record
 * @param data The data that is to be added
 * @returns Promise of data and success( boolean ). If success is true, database interaction was successful and we get doc as data
 * Else we get error message as data and false as success
 */
export async function addOrUpdateUser(id, data) {
    console.log("add funcfrom db service ", id)

    try {
        //Created a doc reference
        let document = doc(db, userTable, id)
        //Getting the document from the database
        let docSnap = await getDoc(document)


        if (docSnap.exists()) {
            //Update the doc with the data provided
            console.log("Doc exists")
            let docRef = await updateDoc(
                document, data
            )
            return {
                data: docRef,
                success: true
            }
        } else {
            console.log("Doc doesnt exist")
            //Create a new doc
            let docRef = await setDoc(
                doc(db, userTable, id), data
            )
            return {
                data: docRef,
                success: true
            }
        }
    } catch (e) {
        console.error("Error adding document: ", e);
        return {
            data: e.message,
            success: false
        }
    }
}

export async function getUserDoc(id) {
    let document = doc(db, userTable, id)
    return await getDoc(document)
}


export async function linkImageID2UserID(userID, imageID) {

    //Get the user docs
    let userDoc = await getDoc(
        doc(
            db, userTable, userID
        )
    )

    //Extract the photoCount from user doc
    let count = userDoc.get("photoCount")

    //**Adding a new document to the photos sub collection**
    let userDocRef = doc(db, userTable, userID)
    let photosCollectionRef = collection(userDocRef, photoTable)
    let photoDocRef = doc(photosCollectionRef, count + "_")
    await setDoc(photoDocRef, {imageID: imageID})

    //increment the value of photoCount
    await updateDoc(
        doc(db, userTable, userID),
        {photoCount: count + 1}
    )

    console.log("Uploaded image")

}