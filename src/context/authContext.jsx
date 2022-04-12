import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();


const AuthProvider = ({ children }) => {
    const [mode, setMode] = useState("light");

    function changeMode() {
        if (mode === "light") {
            setMode("dark")
        } else {
            setMode("light")
        }
    }


    return (
        <AuthContext.Provider
            value={{
                changeMode,
                mode
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuthContex() {
    return useContext(AuthContext);
}

export { AuthProvider, AuthContext, useAuthContex };