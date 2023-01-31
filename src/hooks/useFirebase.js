import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = ()=>{
     signInWithPopup(auth, googleProvider)
     .then(result=>{
        const user = result.user;
        console.log(user);
        setUser(user);
     })
    }
    const unRegister = ()=>{
        signOut(auth)
        .then(()=>{
            console.log('signed out succefully')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[])
    return {user, signInWithGoogle, unRegister}
};

export default useFirebase;