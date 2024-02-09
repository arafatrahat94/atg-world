import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import axios from "axios";
import { serverUrl } from "../Utils/Utils";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const [loading, setLoading] = useState(true);
  const createNew = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const gLogin = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };
  const login = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const forgetPass = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser?.email) {
        axios.get(serverUrl + `User?email=${currentUser.email}`).then((res) => {
          setUser(res?.data);
        });
        setTimeout(() => {
          axios
            .get(serverUrl + `User?email=${currentUser.email}`)
            .then((res) => {
              setUser(res?.data);
            });
        }, 5000);
      }
    });
    return () => unSub();
  }, []);
  console.log(user && user[0]?.name);

  const authData = {
    user,
    createNew,
    loading,
    gLogin,
    login,
    setUser,
    forgetPass,
    LogOut,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
