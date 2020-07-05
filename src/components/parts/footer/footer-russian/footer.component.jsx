import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../footer.style.scss";

// import {  } from "../../contact-modal/";
//IMAGES
import FooterDown from "../../../../assets/icons/footer-down.svg";

export const FooterRussian = () => {
  let history = useHistory()

  //USESTATES VARS
  const [ulState, setUlState] = useState({
    ContatsFooter: false,
    ProductsFooter: false,
  });

  //FUNCTIONS
  const openUL = number => {
    if (number === 1) {
      setUlState({
        ...ulState,
        ContatsFooter: !ulState.ContatsFooter,
      });
    } else if (number === 2) {
      setUlState({
        ...ulState,
        ProductsFooter: !ulState.ProductsFooter,
      });
    }
  };

  const redirectToContact = () =>{
    history.push("/ContactUs")
  }

  return (
    <footer className="footer">
      <div className="footer-inner-container">
        <div className="footer-col-1">
          <h5 className="footer-contact-header">НАШИ КОНТАКТЫ</h5>
          <img
            onClick={() => openUL(1)}
            src={FooterDown}
            alt="footer-expanad"
            className="footer-down-icon"
          />
          <ul
            className={
              ulState.ContatsFooter
                ? "footer-contact-ul-open"
                : "footer-contact-ul"
            }>
            <li className="footer-contact-li">info@61-group.ru</li>
            <li className="footer-contact-li">+7 (918) 048-34-18</li>
            <li className="footer-contact-li">+7 (995) 122-58-74</li>
            <li className="footer-contact-li">
              г. Краснодар ул. Ростовское шоссе д.14 оф. 63
            </li>
          </ul>
        </div>

        <div className="footer-col-2">
          <button onClick={redirectToContact} className="footer-col-2-btn">СВЯЖИТЕСЬ С НАМИ</button>
        </div>

        <div className="footer-col-3">
          <div className="footer-col-3-inner">
            <h5 className="footer-product-header">ПРОДУКЦИЯ</h5>
            <img
              onClick={() => openUL(2)}
              src={FooterDown}
              alt="footer-expanad"
              className="footer-down-icon"
            />
            <ul
              className={
                ulState.ProductsFooter
                  ? "footer-contact-ul-open"
                  : "footer-contact-ul"
              }>
              <li className="footer-contact-li">Белый кварц дробленый</li>
              <li className="footer-contact-li">Кварцевый песок</li>
              <li className="footer-contact-li">Древесные пеллеты</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-inner-container-2">
        <div className="footer-2-col-1">
          <h5 className="developer-info">Разработка сайта.</h5>
          <button className="developer-info-btn">контакт</button>
        </div>
        <div className="footer-2-col-2">
          <h4 className="footer-copyright">
            &copy;2020 ООО 61. Все права соблюдены
          </h4>
        </div>
        <div className="footer-2-col-3"></div>
      </div>
    </footer>
  );
};
