import React, { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [testnet, setTestnet] = useState("Arbitrum Rinkeby");

    const logOut = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(localStorage.getItem("user"))

        // setUser(localStorage.getItem("user"));
    }

    const authInfo = {
        user,
        logOut,
        setUser,
        testnet,
        setTestnet
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;