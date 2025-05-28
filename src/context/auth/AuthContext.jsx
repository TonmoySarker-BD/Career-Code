import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../firebase/firebase.init";

export const AuthContext =createContext();
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const forgotPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useState(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <button className="btn loading">Loading</button>
        </div>;
    }

    const authInfo = {
            createUser,
            signInUser,
            loading,
            user,
            updateUser,
            logout,
            forgotPassword
        };
    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};