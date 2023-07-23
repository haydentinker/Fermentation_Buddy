import {useEffect,useState,useContext,createContext} from "react";
import firebaseConfig from "../config";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const firebase_app=initializeApp(firebaseConfig)
    const auth=getAuth(firebase_app);
    const db=getFirestore(firebase_app);
    const [user,setUser]=useState();
    const googleSignIn=()=>{
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    };
    const logOut=()=>{
        signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log(currentUser)
        });
        return()=>{
            unsubscribe();
        }
    },[]);
    return <AuthContext.Provider value={{googleSignIn, logOut,user,db}}>
        {children}
    </AuthContext.Provider>
}
export const UserAuth=()=>{
    return useContext(AuthContext)
}