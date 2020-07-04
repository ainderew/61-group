import React, { useState } from "react";
import "../contact-page.style.scss";

//COMPONENTS
import { ContactModalRussian } from "../../../parts/contact-modal/contact-modal-russian/contact-modal.component";

//IMAGES
import ContactPhoto from "../../../../assets/images/contact-photo.webp";
export const ContactPageRussian = () => {
  //USESTATE VARS
  const [modalState, setModalState] = useState(false);

  //FUNCTIONS
  const modalOnClick = () => {
    setModalState(prevState => !prevState);
  };
  return (
    <div className="contact-page">
      <ContactModalRussian
        modalState={modalState}
        parentFunction={modalOnClick}
      />
      <div className="contact-page-inner">
        <div className="contact-page-col-1">
          <div className="contact-page-header-container">
            <h2 className="contact-page-header">СВЯЖИТЕСЬ С НАМИ</h2>
            <h4 className="contact-page-sub-heading">
              Мы будем рады ответить на все ваши вопросы
            </h4>
          </div>

          <div className="contact-page-body-container">
            <p className="contact-page-body">
              Компания 61 Group стремится обеспечить для вас высокий уровень
              сервиса, и предоставить самые низкие цены. По любым вопросам вы
              можете связаться с нами любым удобным для вас способом, и наши
              менеджеры свяжутся с вами в течении 5 минут.
            </p>

            <button onClick={modalOnClick} className="contact-page-btn">
              СВЯЖИТЕСЬ С НАМИ
            </button>

            <h2 className="contact-page-email-header">CONTACT US BY EMAIL</h2>
            <h1 className="contact-page-email">info@61-group.ru</h1>
            <h2 className="contact-page-phone-header">CONTACT US BY PHONE</h2>
            <h1 className="contact-page-phone">+7 (918) 048 34 18</h1>
            <h1 className="contact-page-phone">+7 (995) 122 58 74</h1>
            <h2 className="contact-page-email-header">VISIT US</h2>
            <h1 className="contact-page-email">
              г. Краснодар ул. Ростовское шоссе д.14 оф. 63
            </h1>
          </div>
        </div>

        <div className="contact-page-col-2">
          <img
            src={ContactPhoto}
            alt="contact-Group 61"
            className="contact-img"
          />
        </div>
      </div>
    </div>
  );
};