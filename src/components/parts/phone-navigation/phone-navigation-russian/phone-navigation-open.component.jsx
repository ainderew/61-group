import React from "react";
import { Link } from "react-router-dom";
import "../phone-navigation-open.style.scss";

//IMAGES



export const PhoneNavOpenRussian = ({ navState, toggleFunction }) => {

  return (
    <div className={navState ? "phone-nav-display-open" : "phone-nav-display"}>
      <ul className="phone-nav-ul">
       
        <Link to="/">
          <li onClick={toggleFunction} className="phone-nav-li">ГЛАВНАЯ</li>
        </Link>
        
        <Link to="/Products/silicasandlarge/ru">
          <li onClick={toggleFunction} className="phone-nav-li">КВАРЦЕВЫЙ ПЕСОК КРУПНЫХ ФРАКЦИЙ</li>
        </Link>
        
        <Link to="/Products/silicasandmedium/ru">
          <li onClick={toggleFunction} className="phone-nav-li">КВАРЦЕВЫЙ ПЕСОК СРЕДНИХ ФРАКЦИЙ</li>
        </Link>
        
        <Link to="/Products/silicasandsmall/ru">
          <li onClick={toggleFunction} className="phone-nav-li">КВАРЦЕВЫЙ ПЕСОК МЕЛКИХ ФРАКЦИЙ</li>
        </Link>
        
        <Link to="/Products/whitequartz/ru">
          <li onClick={toggleFunction} className="phone-nav-li">БЕЛЫЙ КВАРЦ ДРОБЛЕНЫЙ</li>
        </Link>
        
        <Link to="/Products/woodpellets/ru">
          <li onClick={toggleFunction} className="phone-nav-li">ДРЕВЕСНЫЕ ПЕЛЛЕТЫ</li>
        </Link>

        <Link to="/AboutUs/ru">
          <li onClick={toggleFunction} className="phone-nav-li">О КОМПАНИИ</li>
        </Link>

        <Link to="/ContactUs/ru">
          <li onClick={toggleFunction} className="phone-nav-li">СВЯЖИТЕСЬ С НАМИ</li>
        </Link>
      </ul>
    </div>
  );
};
