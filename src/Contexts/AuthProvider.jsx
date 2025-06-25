import {
  createUserWithEmailAndPassword,
  
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../commnents/Firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
 
  const [user, setUser] = useState(null);
  const createAccount = (email, password,) => {
    return createUserWithEmailAndPassword(auth, email,password);
  };

  


  const updateUser = (updateData) =>{

    setLoading(true)

    return updateProfile(auth.currentUser,updateData)
  }
  const LoginUser = (email, password) => {
    sendPasswordResetEmail(email)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true)
    return signOut(auth);
  };

  const googlesign = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const forgetPass = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email);
  };

  

  useEffect(() => {
    const unsusribe = onAuthStateChanged(auth, (currentUser) => {

      setLoading(false)
      setUser(currentUser);
    });
    return () => {
      unsusribe();
    };
  }, []);


  const userinFo = {
   
    createAccount,
    LoginUser,
    user,
    setUser,
    logout,
    googlesign,
    forgetPass,
    loading,
    setLoading,
    updateUser,
   
  };






  return <AuthContext value={userinFo}>
  {children}
  
  </AuthContext>;
};

export default AuthProvider;
