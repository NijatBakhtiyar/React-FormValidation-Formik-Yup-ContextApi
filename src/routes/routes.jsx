import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/register";

function Routers() {
    return (
        <Routes>
            <Route path="/auth" element={<Register />} />
        </Routes>
    );
}

export default Routers;
