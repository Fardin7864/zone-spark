"use client"
import auth from "@/utils/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


export const AuthContext = createContext();

const AuthanticationProvider = ({children}) => {

    // states
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);


    // auth provider
    const google = new GoogleAuthProvider();

    // create user with email
    const creatUres =(emial, password) => { 
        setLoading(true)
        return createUserWithEmailAndPassword(auth, emial, password)
     }

    // Login with email and pass
    const login = (email, password) => { 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Social login
    const socilaLogin = (provider) => { 
        setLoading(true)
        return signInWithPopup(auth, provider)
     }

    //  sign out
    const logOut = () => { 
        setLoading(true)
        return signOut(auth)
     }

    // toasts
    const successToast = () => { 
        toast.success('Successfully Loged In!');
     }

    const faildToast =() => { 
        toast.error('Log In faild!');
     }
    const networkFaildToast =() => { 
        toast.error('please check your Network!');
     }

    
    useEffect(() => { 
        const unsebscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(true)
            setUser(currentUser);
            setLoading(false)
        })

        return () => {
            unsebscribe();
        }
     },[])

    //  context info
     const authInfo = {
        user,
        google,
        creatUres,
        login,
        socilaLogin,
        logOut,
        isLoading,
        successToast,
        faildToast,
        networkFaildToast,
     }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthanticationProvider;