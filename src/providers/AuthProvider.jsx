import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
      const name = 'Nodi Sagor, Mohona';
      const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      }
    const authInfo = {
        name,
        createUser
      
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
            
        </AuthContext.Provider>
    );
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