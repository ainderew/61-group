import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./phone-navigation-open.style.scss";

//IMAGES
import CloseIcon from "../../../assets/icons/close.svg";

export const PhoneNavOpen = ({ navState, toggleFunction }) => {

  return (
    <div className={navState ? "phone-nav-display-open" : "phone-nav-display"}>
      <ul className="phone-nav-ul">
        <Link to="/Products">
          <li onClick={toggleFunction} className="phone-nav-li">PRODUCTS</li>
        </Link>

        <Link to="/">
          <li onClick={toggleFunction} className="phone-nav-li">GENERAL</li>
        </Link>

        <Link to="/AboutUs">
          <li onClick={toggleFunction} className="phone-nav-li">ABOUT US</li>
        </Link>

        <Link to="/ContactUs">
          <li onClick={toggleFunction} className="phone-nav-li">CONTACT US</li>
        </Link>
      </ul>
    </div>
  );
};
