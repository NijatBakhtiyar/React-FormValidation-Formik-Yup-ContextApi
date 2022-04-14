/* eslint-disable require-jsdoc */
import React from "react";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

import "./styles/general.scss";
import AuthForms from "./pages/authForms";
import {AuthProvider} from "./context/authContext";
import {ToastContainer} from "react-toastify";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth");
  }, []);

  return (
    <AuthProvider>
      <AuthForms />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
