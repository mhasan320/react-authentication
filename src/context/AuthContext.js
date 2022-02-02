import React, {useContext, useState, useEffect} from "react";
import { auth } from "../firebase"

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext); 
}

export function AuthProvider({children}){

    const [currentUser, setUser] = useState();
    const [loading, setLoading] = useState(true)

    // signup funciton
    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password);
    }

    // Login function
    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password);
    }

    // logout function
    function logout(){
        return auth.signOut();
    }

    //forgot password function
    function forgotPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    // update email function
    function updateEmail(email){
        return currentUser.updateEmail(email)
    }

    // update password function
    function updatePassword(password){
        return currentUser.updatePassword(password)
    }


    useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user)
        setLoading(false)
    })
    return unsubscribe;
   }, [])


    const value={
        currentUser,
        login,
        signup,
        logout,
        forgotPassword,
        updateEmail,
        updatePassword
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}