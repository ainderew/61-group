import React from "react";
import "./phone-navigation.style.scss";

import MenuIcon from "../../../assets/icons/menu2.svg"
import MenuLogo from "../../../assets/logos/Logo.webp"


export const PhoneNavigation = () =>{
    
    return (
      <header className="phone-nav">
        <div className="phone-nav-left">
          <img src={MenuLogo} alt="" className="phone-nav-logo" />
        </div>

        <div className="phone-nav-right">
          <img src={MenuIcon} alt="" className="phone-nav-icon" />
        </div>
      </header>
    );
}