import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext= createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
   
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(()=>{
          const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUserEmail = {email: userEmail}
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
               axios.post('http://localhost:5000/jwt', loggedUserEmail, {withCredentials: true})
               .then(res=>{
                console.log("token",res.data)
               })
            }
            else{
              axios.post('http://localhost:5000/logout', loggedUserEmail, {withCredentials: true})
               .then(res=>{
                console.log("token logout",res.data)
               })
            }
          })
          return()=>{
            unsubscribe();
          }
    },[])

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


    const authInfo={
      user,
      loading,
      createUser,
      signIn,
      logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;