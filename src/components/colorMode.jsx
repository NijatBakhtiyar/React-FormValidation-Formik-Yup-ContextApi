import React from "react";
import DarkModeIcon from "../constant/icons/darkModeIcon";
import LightModeIcon from "../constant/icons/lightModeIcon";
import { useAuthContex } from "../context/authContext";

function ColorMode() {
    const { changeMode, mode } = useAuthContex();

    return (
        <div className="modes" onClick={changeMode}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </div>
    );
}

export default ColorMode;
