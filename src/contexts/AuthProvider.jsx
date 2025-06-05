import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const google = () => {
   return signInWithPopup(auth, provider)
  }
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const data = {
    login,
    user,
    loading,
    register,
    google,
    logOut,
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
