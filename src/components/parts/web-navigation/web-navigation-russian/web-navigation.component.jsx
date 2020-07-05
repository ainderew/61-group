import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../web-navigation.style.scss";
import { languageAction } from "../../../../redux_actions/index";

//LOGO
import LogoImg from "../../../../assets/logos/Logo.svg";

//ICON
import SearchIcon from "../../../../assets/icons/search_white.svg";
import EmailIcon from "../../../../assets/icons/mail_white.svg";
import PhoneIcon from "../../../../assets/icons/phone_white.svg";
import RussianFlag from "../../../../assets/icons/russia.svg";
import UkFlag from "../../../../assets/icons/uk.svg";

export const WebNavigationRussian = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  //USEREF
  const productsSubMenu = useRef(null);

  //USESTATES
  const [searchState, setSearchState] = useState(false);
  const [languageState, setLanguageState] = useState(false);

  //FUNCTIONS
  const onSearchClick = () => {
    setSearchState(true);
  };

  const onLanguageHover = () => {
    setLanguageState(true);
  };
  const onLanguageLeave = () => {
    setLanguageState(false);
  };

  const onChangeLanguage = index => {
    if (index === 1) {
      history.push("/ru");
      dispatch(languageAction("Russian"));
      localStorage.setItem("Language", "Russian");
    } else if (index === 2) {
      history.push("/en");
      dispatch(languageAction("English"));
      localStorage.setItem("Language", "English");
    }
  };

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
                <h3 className="sub-menu-header">ПРОДУКЦИЯ</h3>
              </div>
              <div className="web-nav-product-sub-menu-row-2">
                <div className="web-nav-product-sub-menu-col">
                  <a
                    href="/Products/silicasandlarge/ru"
                    className="sub-menu-item">
                    КВАРЦЕВЫЙ ПЕСОК КРУПНЫХ ФРАКЦИЙ
                  </a>
                  <a
                    href="/Products/silicasandmedium/ru"
                    className="sub-menu-item">
                    КВАРЦЕВЫЙ ПЕСОК СРЕДНИХ ФРАКЦИЙ
                  </a>
                  <a
                    href="/Products/silicasandsmall/ru"
                    className="sub-menu-item">
                    КВАРЦЕВЫЙ ПЕСОК МЕЛКИХ ФРАКЦИЙ
                  </a>
                </div>
                <div className="web-nav-product-sub-menu-col">
                  <a href="/Products/whitequartz/ru" className="sub-menu-item">
                    БЕЛЫЙ КВАРЦ ДРОБЛЕНЫЙ
                  </a>
                </div>
                <div className="web-nav-product-sub-menu-col">
                  <a href="/Products/woodpellets/ru" className="sub-menu-item">
                    ДРЕВЕСНЫЕ ПЕЛЛЕТЫ
                  </a>
                </div>
              </div>
            </div>

            <li className="web-nav-li">
              <a href="/" className="web-nav-link">
                ГЛАВНАЯ
              </a>
            </li>

            <li
              onMouseEnter={() => onProductEnter(productsSubMenu)}
              onMouseLeave={() => onProductLeave(productsSubMenu)}
              className="web-nav-li products-li">
              <h3 className="web-nav-link">ПРОДУКЦИЯ</h3>
            </li>

            <li className="web-nav-li">
              <a href="/ContactUs/ru" className="web-nav-link">
                СВЯЖИТЕСЬ С НАМИ
              </a>
            </li>
            <li className="web-nav-li">
              <a href="/AboutUs/ru" className="web-nav-link">
                О КОМПАНИИ
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
          ) : (
            <div
              onMouseEnter={onLanguageHover}
              onMouseLeave={onLanguageLeave}
              className="language-selector">
              <img
                src={RussianFlag}
                alt="russian flag"
                className="language-flag"
              />
              <h3 className="language-selected">русский</h3>
              <div
                className={
                  languageState
                    ? "language-selector-options"
                    : "language-selector-options-off"
                }>
                <ul className="language-selector-ul">
                  <li
                    onClick={() => onChangeLanguage(1)}
                    className="language-selector-li">
                    <img
                      src={RussianFlag}
                      alt="russian flag"
                      className="language-flag"
                    />
                    русский
                  </li>
                  <li
                    onClick={() => onChangeLanguage(2)}
                    className="language-selector-li">
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
