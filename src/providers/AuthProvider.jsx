import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import PropTypes from "prop-types";

const googleProvider = new GoogleAuthProvider()


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
      const name = 'Nodi Sagor, Mohona';
      //create user using context
      const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      }
      //login using context
      const singInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      }
      //using context is sign out
      const signOutUser = () => {
        return signOut(auth);
      }
      //sing in with google
      const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
      }
      //using useEffect instead of if-else statement to handle authentication state changes

      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current User', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }

      }, [])
      
      onAuthStateChanged(auth, currentUser => {
        if(currentUser) {
            console.log('Currently logged user', currentUser)
            setUser(currentUser);
          
        } 

        else {
            console.log('No user logged in');
            setUser(null);
        }

      })
    const authInfo = {
        name,
        createUser,
        singInUser,
        user,
        signOutUser,
        loading, 
        signInWithGoogle
      
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;
/**
 * 1) Create context with null as a default value
 * 2) Create provider
 * 3) Set a default value (authInfo)
 * 4) use the authProvider in the main.jsx
 * 5) access the children inside authProvider in the main.jsx
 * 6) export the created component AuthProvider  and also the Created context AuthContext
 * 7) use it in the different components
 */