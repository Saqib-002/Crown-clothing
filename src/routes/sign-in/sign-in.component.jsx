import {
        signInWithGooglePopUp,
        createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
        const consoleUser = async () => {
                const { user } = await signInWithGooglePopUp();
                const userDocRef = await createUserDocumentFromAuth(user);
        };
        return (
                <div>
                        <h1>Sign In Page</h1>
                        <button onClick={consoleUser}>
                                Sign in with google
                        </button>
                </div>
        );
};

export default SignIn;
