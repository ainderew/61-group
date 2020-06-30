import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./web-navigation.style.scss";

//LOGO
import LogoImg from "../../../assets/logos/Logo.svg";

//ICON
import SearchIcon from "../../../assets/icons/search_white.svg";
import EmailIcon from "../../../assets/icons/mail_white.svg";
import PhoneIcon from "../../../assets/icons/phone_white.svg";

export const WebNavigation = () => {
  //USEREF
  const productsSubMenu = useRef(null);

  //USESTATES
  const [searchState, setSearchState] = useState(false);

  //FUNCTIONS
  const onSearchClick = () => {
    setSearchState(true);
  };

  const onProductEnter = (element) => {
    element.current.style.display = "grid";
  };
  const onProductLeave = (element) => {
    element.current.style.display = "none";
  };

  return (
    <header className="web-nav">
      <div className="web-navigation-container">
        <div className="web-nav-col-1">
          <Link to="/">
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
                  <a href="/Products/silicasandmedium" className="sub-menu-item">
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

            <li
              onMouseEnter={() => onProductEnter(productsSubMenu)}
              onMouseLeave={() => onProductLeave(productsSubMenu)}
              className="web-nav-li products-li">
              <a href="/Products" className="web-nav-link">
                PRODUCTS
              </a>
            </li>
            <li className="web-nav-li">
              <a href="/" className="web-nav-link">
                GENERAL
              </a>
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
            <input type="text" className="web-nav-search-input" />
          ) : null}

          <img
            onClick={onSearchClick}
            src={SearchIcon}
            alt="Search Icon"
            className="web-nav-search-icon"
          />
        </div>
      </div>
    </header>
  );
};
