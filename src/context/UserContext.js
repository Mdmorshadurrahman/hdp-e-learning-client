import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, {createContext} from 'react';
import { useState } from 'react';
import app from '../firebase/Firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser] = useState({firstName:'Md Morshadur',lastName:'Rahman'});

    const googleProvider = new GoogleAuthProvider();

    const register = (email,password,displayName) => {
        return createUserWithEmailAndPassword(auth,email,password,displayName);
    }

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth,googleProvider);
    }

    const logout = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User: ',currentUser);
        })

        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {user, register,login,logout,loginWithGoogle}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;

