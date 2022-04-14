import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "../pages/register";

function Routers() {
    return (
        <Routes>
            <Route path="/auth" element={<Register />} />
            <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
    );
}

export default Routers;
