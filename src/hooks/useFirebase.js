import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // collect inputs
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        signUpWithEmail()
        userName()
    }
    const handleLoginWithEmail = (e) => {
        e.preventDefault()
        signInWithEmail()
    }

    // firebase Functions
    const auth = getAuth()

    // set name
    const userName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                console.log(result.user)
            })

    }

    // signup with email and password
    const signUpWithEmail = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUsers(user)
            })
            .catch((error) => {
                const errorMessege = error.messege;
                setError(errorMessege)
            })
    }


    const signInWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUsers(user)
            })
            .catch((error) => {
                const errorMessege = error.messege;
                setError(errorMessege)
            })
    }

    const signinUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return {
        users,
        signinUsingGoogle,
        logOut,
        handleNameChange,
        signUpWithEmail,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleLoginWithEmail,
        error
    }
}

export default useFirebase;