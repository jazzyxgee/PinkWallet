import React, { useContext, useState, useEffect } from 'react'
import { auth } from "../firebase"

const AuthContext = React.createContext()

export function useAuth(){

    return useContext(AuthContext)
}

export function AuthProvider ({children}){

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {

        /*firebase has a way to notify you if the user gets set.*/
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {

        /*firebase has a way to notify you if the user gets set.*/
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
        return auth.signOut()
    }
    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }


    /*only want to run when we mount our component.*/
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          setCurrentUser(user)
          setLoading(false)
          /*unsubscribe this component*/
        })
    
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword
    }

    return (

        <AuthContext.Provider value = {value}>
            {!loading && children}
        </AuthContext.Provider>

    )

}