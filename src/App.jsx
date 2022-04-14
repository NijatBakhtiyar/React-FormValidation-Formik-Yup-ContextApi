/* eslint-disable require-jsdoc */
import React from "react";

import "./styles/general.scss";
import AuthForms from "./pages/authForms";
import {AuthProvider} from "./context/authContext";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <AuthForms />
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
