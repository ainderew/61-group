import React, {useState} from "react";
import "./web-navigation.style.scss";

//LOGO
import LogoImg from "../../../assets/logos/Logo.webp";

//ICON
import SearchIcon from "../../../assets/icons/search_white.svg"

export const WebNavigation = () => {
    //USESTATES
    const [searchState, setSearchState] = useState(false);
    
    //FUNCTIONS
    const onSearchClick = () =>{
        setSearchState(true);
    }
    
  return (
    <header className="web-nav">
      <div className="web-nav-col-1">
        <img src={LogoImg} alt="Group 61 Logo" className="web-nav-logo" />
      </div>
      <div className="web-nav-col-2">
        <ul className="web-nav-ul">
          <li className="web-nav-li">
            <a href="#Products" className="web-nav-link">
              PRODUCTS
            </a>
          </li>
          <li className="web-nav-li">
            <a href="#Products" className="web-nav-link">
              GENERAL
            </a>
          </li>
          <li className="web-nav-li">
            <a href="#Products" className="web-nav-link">
              CONTACT US
            </a>
          </li>
          <li className="web-nav-li">
            <a href="#Products" className="web-nav-link">
              ABOUT US
            </a>
          </li>
        </ul>
      </div>
      <div className="web-nav-col-3">
        {(searchState) ?  <input type="text" className="web-nav-search-input" />: null}
       
        <img
          onClick={onSearchClick}
          src={SearchIcon}
          alt="Search Icon"
          className="web-nav-search-icon"
        />
      </div>
    </header>
  );
};
