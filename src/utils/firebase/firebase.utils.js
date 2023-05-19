import { initializeApp } from "firebase/app";
import {
        getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
        apiKey: "AIzaSyCkhZJqBa2XZkNbIexyFcDMIRGVJ2a3OAE",
        authDomain: "ecommerce-5a902.firebaseapp.com",
        projectId: "ecommerce-5a902",
        storageBucket: "ecommerce-5a902.appspot.com",
        messagingSenderId: "363960548053",
        appId: "1:363960548053:web:e229a235ac24ae1705805c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
        prompt: "select_account",
});
const a = 2 + 3;
export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
        const userDocRef = doc(db, "Users", userAuth.uid);

        const userSnapShot = await getDoc(userDocRef);

        if (!userSnapShot.exists()) {
                const { displayName, email } = userAuth;
                const createdAt = new Date();
                try {
                        await setDoc(userDocRef, {
                                displayName,
                                email,
                                createdAt,
                        });
                } catch (err) {
                        console.log("error creating user", err.message);
                }
        }
        return userDocRef;
};
