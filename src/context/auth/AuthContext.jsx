import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../firebase/firebase.init";

export const AuthContext =createContext();
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
            createUser,
            signInUser,
            loading
        };
    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};