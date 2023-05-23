import React, { createContext, useEffect, useState } from 'react';
import app from '../config/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const varifyEmail =()=>{
        return sendEmailVerification(auth.currentUser)
    }

    const logOut =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        loading, 
        createUser, 
        signIn,
        signInWithGoogle,
        varifyEmail,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;