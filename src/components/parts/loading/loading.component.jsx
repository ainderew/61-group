import React from "react";
import "./loading.style.scss";

export const Loading = ({loadingClass}) => {
    
    return (
        <div className={loadingClass}>
            <div className="lds-dual-ring"></div>
        </div>
    )
}