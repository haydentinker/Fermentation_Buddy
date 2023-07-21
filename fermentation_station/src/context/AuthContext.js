import {useEffect,useState,useContext,createContext} from "react";
import { getAuth, signInWithRedirect, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
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
    return <AuthContext.Provider value={{googleSignIn, logOut,user}}>
        {children}
    </AuthContext.Provider>
}
export const UserAuth=()=>{
    return useContext(AuthContext)
}