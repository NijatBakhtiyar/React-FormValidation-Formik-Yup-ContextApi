/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const [registerForm, setRegisterForm] = useState(null);
    const [mode, setMode] = useState("light");

    console.log(registerForm);

    function changeMode() {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    }

    return (
        <AuthContext.Provider
            value={{
                registerForm,
                setRegisterForm,
                changeMode,
                mode,
            }}
        >

            {children}

        </AuthContext.Provider>
    );
}

function useAuthContex() {
    return useContext(AuthContext);
}

export { AuthProvider, AuthContext, useAuthContex };
