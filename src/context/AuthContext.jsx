import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/firebase'

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new error("There is no auth provider !")
    return context;

}

export const AuthProvider = ({ children }) => {


    //USE STATE PER SABER SI L'USUARI ESTÀ LOGEJAT O NO
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // FIREBASE REGISTER, LOGIN, LOGOUT I LOGIN WITH GOOGLE
    const singup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const logout=()=> signOut(auth);

    const loginGoogle=()=>{
        const googleProvider=new GoogleAuthProvider();
        return signInWithPopup(auth,googleProvider);

    }

    const resetPassword=(email)=>{
        sendPasswordResetEmail(auth,email)
    }

    //USE EFFECT S'EXECUTA AL CARREGAR EL COMPONENT

    useEffect(() => {
       onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false);
       })
    }, [])

    return (

        <authContext.Provider value={{ singup, login,user,logout,loading,loginGoogle,resetPassword}}>
            {children}
        </authContext.Provider>
    )
}