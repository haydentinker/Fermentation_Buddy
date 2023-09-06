import {useEffect,useState,useContext,createContext} from "react";
import firebaseConfig from "../config";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider,signOut,onAuthStateChanged, signInWithPopup } from "firebase/auth";
import  { useNavigate} from 'react-router-dom'
import {getFirestore,doc,setDoc} from "firebase/firestore";
const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const firebase_app=initializeApp(firebaseConfig)
    const auth=getAuth(firebase_app);
    const db=getFirestore(firebase_app);
    const [user,setUser]=useState();
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
          .then((result) => {
          })
          .catch((error) => {
            console.error("Google Sign-In Error:", error);
          });
      };
    const logOut=()=>{
        signOut(auth)
        .then(() => {
            // Handle successful sign-out
            // Redirect to the home page

          })
          .catch((error) => {
            // Handle sign-out errors here
            console.error("Sign Out Error:", error);
          });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            if(currentUser){
                const userDocRef=doc(db,'users',currentUser.uid);
                const data={name:currentUser.displayName,email:currentUser.email};
                setDoc(userDocRef,data);
            };
        });
        return()=>{
            unsubscribe();
        }
    },[auth,db]);
    return <AuthContext.Provider value={{googleSignIn, logOut,user,db}}>
        {children}
    </AuthContext.Provider>
}
export const UserAuth=()=>{
    return useContext(AuthContext)
}