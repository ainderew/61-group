import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./web-navigation.style.scss";
import { languageAction } from "../../../redux_actions/index";

//LOGO
import LogoImg from "../../../assets/logos/Logo.svg";

//ICON

import EmailIcon from "../../../assets/icons/mail_white.svg";
import PhoneIcon from "../../../assets/icons/phone_white.svg";
import RussianFlag from "../../../assets/icons/russia.svg";
import UkFlag from "../../../assets/icons/uk.svg";



export const WebNavigation = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  //USEREF
  const productsSubMenu = useRef(null);

  //USESTATES
  const [searchState] = useState(false);
  const [languageState, setLanguageState] = useState(false)

  //FUNCTIONS
  // const onSearchClick = () => {
  //   setSearchState(true);
  // };
  
  const onLanguageHover = () =>{
    setLanguageState(true);
  }
  const onLanguageLeave = () =>{
    setLanguageState(false);
  }

  const onChangeLanguage = (index) =>{
    if (index === 1){
      history.push("/ru")
      dispatch(languageAction("Russian"))
      sessionStorage.setItem("Language", "Russian");
    }else if (index === 2){
      history.push("/en")
      dispatch(languageAction("English"))
      sessionStorage.setItem("Language", "English");
    }
    
  }
  
  const onProductEnter = element => {
    element.current.style.display = "grid";
  };
  const onProductLeave = element => {
    element.current.style.display = "none";
  };

  return (
    <header className="web-nav">
      <div className="web-navigation-container">
        <div className="web-nav-col-1">
          <Link to="/en">
            <img src={LogoImg} alt="Group 61 Logo" className="web-nav-logo" />
          </Link>
        </div>
        <div className="web-nav-col-2">
          <ul className="web-nav-ul">
            <div
              ref={productsSubMenu}
              onMouseEnter={() => onProductEnter(productsSubMenu)}
              onMouseLeave={() => onProductLeave(productsSubMenu)}
              className="web-nav-sub-menu products-sub-menu">
              <div className="web-nav-product-sub-menu-row-1">
                <h3 className="sub-menu-header">PRODUCTS</h3>
              </div>
              <div className="web-nav-product-sub-menu-row-2">
                <div className="web-nav-product-sub-menu-col">
                  <a href="/Products/silicasandlarge" className="sub-menu-item">
                    Silica Sand Large Fraction
                  </a>
                  <a
                    href="/Products/silicasandmedium"
                    className="sub-menu-item">
                    Silica Sand Medium Fraction
                  </a>
                  <a href="/Products/silicasandsmall" className="sub-menu-item">
                    Silica Sand Small Fraction
                  </a>
                </div>
                <div className="web-nav-product-sub-menu-col">
                  <a href="/Products/whitequartz" className="sub-menu-item">
                    White Quartz
                  </a>
                </div>
                <div className="web-nav-product-sub-menu-col">
                  <a href="/Products/woodpellets" className="sub-menu-item">
                    Wood Pellets
                  </a>
                </div>
              </div>
            </div>

            <li className="web-nav-li">
              <a href="/en" className="web-nav-link">
                GENERAL
              </a>
            </li>

            <li
              onMouseEnter={() => onProductEnter(productsSubMenu)}
              onMouseLeave={() => onProductLeave(productsSubMenu)}
              className="web-nav-li products-li">
              <h3 className="web-nav-link">PRODUCTS</h3>
            </li>

            <li className="web-nav-li">
              <a href="/ContactUs" className="web-nav-link">
                CONTACT US
              </a>
            </li>
            <li className="web-nav-li">
              <a href="/AboutUs" className="web-nav-link">
                ABOUT US
              </a>
            </li>
          </ul>
          <img src={EmailIcon} alt="" className="web-nav-contact-icon" />
          <h5 className="web-nav-email">info@61-group.ru</h5>
          <img src={PhoneIcon} alt="" className="web-nav-contact-icon" />
          <h5 className="web-nav-email">+7 918 048-34-18</h5>
        </div>
        <div className="web-nav-col-3">
          {searchState ? (
            // 
            null
          ) : (
            <div onMouseEnter={onLanguageHover} onMouseLeave={onLanguageLeave} className="language-selector">
              <img
                src={UkFlag}
                alt="russian flag"
                className="language-flag"
              />
              <h3 className="language-selected">English</h3>
              <div className={(languageState) ? "language-selector-options" : "language-selector-options-off"}>
                <ul className="language-selector-ul">
                  <li onClick={()=>onChangeLanguage(1)} className="language-selector-li">
                    <img
                      src={RussianFlag}
                      alt="russian flag"
                      className="language-flag"
                    />
                    Russian
                  </li>
                  <li onClick={()=>onChangeLanguage(2)} className="language-selector-li">
                    <img
                      src={UkFlag}
                      alt="russian flag"
                      className="language-flag"
                    />
                    English
                  </li>
                </ul>
              </div>
            </div>
          )}

         
        </div>
      </div>
    </header>
  );
};
