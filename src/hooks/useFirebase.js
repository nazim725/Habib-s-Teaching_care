import initializeAuthentication from "../Firebase/firebase.init"
import {
  GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const useFirebase = () => {

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const ClearError = () => {
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  // clear error
  useEffect(() => {
    ClearError();
  }, [error]);


  const auth = getAuth();



  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGithub = () => {
    // return signInWithPopup(auth, googleProvider);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user)
        setUser(user)

      })
      .catch(error => {
        setError(error.message)
      })
  };


  const signInWithEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => setError(err.message));
  };





  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe;
  }, [user]);


  const logout = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      });

  }

  const getName = (e) => {
    setName(e?.target?.value);
  };
  // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  // get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };
  // get password
  const getPhotoURL = (e) => {
    setPhotoURL(e?.target?.value);
  };

  // signUp
  const signUpWithEmail = () => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update name and email
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    }).then((result) => { });
  };

  // sendVilifiedEmail
  function sendVilifiedEmail() {
    sendEmailVerification(auth.currentUser).then((result) => {
      alert(
        `Please verify your email, a verification email has been sent to ${email}`
      );
    });










  }

  return {
    sendVilifiedEmail,
    setUserName,
    sendEmailVerification,
    signInWithGoogle,

    signInWithGithub,
    user,
    setUser,
    error,
    auth,
    setError,
    logout,
    getEmail,
    getPassword,
    signUpWithEmail,
    signInWithEmail,
    getName,
    getPhotoURL,

  }
}

export default useFirebase