import React from "react";

function UnderlineIcon({params}) {
    return (
        <svg
            width={params?.width || 130}
            height={params?.height || 4}
            viewBox="0 0 133 4" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line y1="2" x2="133" y2="2" stroke={params?.color || "#444AFF"} strokeWidth="4" />
        </svg>
    );
};

export default UnderlineIcon;
