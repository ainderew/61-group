import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "../white-quartz.style.scss";

//COMPONENTS
import { ContactModalRussian } from "../../../../parts/contact-modal/contact-modal-russian/contact-modal.component";

import DeliverySVG from "../../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../../assets/products/White fraction quartz.webp";

export const WhiteQuartzRussian = () => {
  //USEREF VARS
  const screen = useRef(null);
  //USESTATE VARS
  const [modalState, setModalState] = useState(false);

  //FUNCTIONS
  const modalOnClick = () => {
    setModalState(prevState => !prevState);
    screen.current.scrollIntoView({ block: "center" });
  };

  return (
    <div ref={screen} className="white-quartz-page">
      <Helmet>
        <title>
          Высококачественный молочно-белый кварц дробленый, используемый в
          различных сферах.
        </title>
        <meta
          name="description"
          content="Компания 61 GROUP реализует по доступной стоимости белый дробленный кварц.
          Заказать и купить материал можно онлайн. Доставка осуществляется в ближнее и дальнее
          зарубежье."
        />
      </Helmet>
      <ContactModalRussian
        parentFunction={modalOnClick}
        modalState={modalState}
      />
      <div className="white-quartz-page-inner">
        <div className="white-quartz-page-col-1">
          <div className="white-quartz-header-container">
            {/* <h2 className="white-quartz-sub-header">PRODUCTS</h2> */}
            <h1 className="white-quartz-header">Кварц белый дробленый</h1>
            <p className="white-quartz-paragraph">
              Кварцевый дроблёный песок – это песок, полученный
              дроблением жильного молочно-белого кварца. Имеет чистый однородный
              состав.За счет аккуратного дробления гранулы приобретают колотую
              форму с высокой аброзивностью.
              <br />
              <br /> Продукция производится согласно ТУ
              08.99.29-017-16767071-2017 Содержание SiO2 — min 98% / Насыпная
              плотность — 1288 кг/м3
            </p>
          </div>
          <div className="white-quartz-contact-container">
            <a href="/ContactUs/ru" className="white-quartz-contact">
              Связаться с нами
            </a>
          </div>
          <div className="white-quartz-body-container">
            <h4 className="white-quartz-body-title">
              Сферы применения белого кварца
            </h4>
            <ul className="white-quartz-body-ul">
              <li className="white-quartz-body-li">
                {" "}
                водоочистка и водоподготовка (поддерживающий слой)
              </li>
              <li className="white-quartz-body-li">ландшафтный дизайн</li>
              <li className="white-quartz-body-li">архитектурный бетон</li>
              <li className="white-quartz-body-li">грунт для аквариумов</li>
            </ul>
          </div>
          <div className="white-quartz-body-container">
            <h4 className="white-quartz-body-title">
              В наличии следующие фракции:
            </h4>
            <ul className="white-quartz-body-ul">
              <li className="white-quartz-body-li">MКO (2.0-5.0 mm)</li>
              <li className="white-quartz-body-li">MКO (1.0-3.0 mm)</li>
              <li className="white-quartz-body-li">MКO (0.8-2.0 mm)</li>
              <li className="white-quartz-body-li">MКO (0.7-1.6 mm)</li>
              <li className="white-quartz-body-li">MКO (0.7-1.2 mm)</li>
              <li className="white-quartz-body-li">MКO (0.5-1.0 mm)</li>
              <li className="white-quartz-body-li">MКO (3.0-1.0 mm)</li>
            </ul>
          </div>

          <div className="white-quartz-business-container">
            <h3 className="white-quartz-business">
              Компания 61 Group осуществляет поставки продукции по России, СНГ и
              всему миру.
            </h3>
          </div>

          <div className="white-quartz-delivery-container">
            <img
              src={DeliverySVG}
              alt="Delivery icon"
              className="white-quartz-delivery-icon"
            />
            <h4 className="white-quartz-delivery">
              Доставка авто и ж / д транспортом.
            </h4>
          </div>
        </div>

        <div className="white-quartz-page-col-2">
          <img
            src={ProductImage}
            alt="White Quartz"
            className="white-quartz-col-2-product-img"
          />
          <button
            onClick={modalOnClick}
            className="white-quartz-page-col-2-btn">
            Напишите нам
          </button>
        </div>
      </div>
    </div>
  );
};
