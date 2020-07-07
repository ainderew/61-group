import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "../wood-pellets.style.scss";

//COMPONENTS
import { ContactModalRussian } from "../../../../parts/contact-modal/contact-modal-russian/contact-modal.component";
//IMAGES
import DeliverySVG from "../../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../../assets/products/wood-pellets.webp";
export const WoodPelletsRussian = () => {
  //USEREF VARS
  const screen = useRef(null);
  //USESTATE VARS
  const [modalState, setModalState] = useState(false);

  //FUNCTIONS
  const modalOnClick = (e) => {
    e.preventDefault();
    setModalState(prevState => !prevState);
    screen.current.scrollIntoView({ block: "center" });
  };

  return (
    <div ref={screen} className="wood-pellets-page">
      <Helmet>
        <title>
          Древесные гранулы (пеллеты) – экологически чистый вид твердого топлива
          по доступным ценам.
        </title>
        <meta
          name="description"
          content="Пеллеты - гранулы являются 100% древесным продуктом, применяются для комфортного
          отопления любых помещений. Мы предлагаем приобрести продукт по оптовой цене с
          доставкой по РФ и зарубеж."
        />
      </Helmet>
      <ContactModalRussian
        modalState={modalState}
        parentFunction={modalOnClick}
      />
      <div className="wood-pellets-page-inner">
        <div className="wood-pellets-page-col-1">
          <div className="wood-pellets-header-container">
            {/* <h2 className="wood-pellets-sub-header">PRODUCTS</h2> */}
            <h1 className="wood-pellets-header">ДРЕВЕСНЫЕ ПЕЛЛЕТЫ</h1>
            <p className="wood-pellets-paragraph">
              Древесные гранулы, они же пеллеты, - это вид экологически чистого
              твердого топлива. Древесные гранулы - это новое топливо из
              биомассы. Для низкой цены и высокой скорости горения, это хорошая
              замена для дров, угля, нефти, газа. Древесные гранулы широко
              используются в отоплении, охлаждении, котельных и электростанциях.
            </p>
          </div>
          <div className="wood-pellets-contact-container">
            <a href="/ContactUs/ru" className="wood-pellets-contact">
              Связаться с нами
            </a>
          </div>
          <div className="wood-pellets-body-container">
            <h4 className="wood-pellets-body-title">
              Древесные пеллеты применяются:
            </h4>
            <ul className="wood-pellets-body-ul">
              <li className="wood-pellets-body-li">
                Для отопления жилых домов, печей и каминов
              </li>
              <li className="wood-pellets-body-li">
                Для получения электроэнергии, сжиганием в котлах
              </li>
              <li className="wood-pellets-body-li">
                Для туалета домашних животных.
              </li>
            </ul>
          </div>
          <div className="wood-pellets-body-container">
            <h4 className="wood-pellets-body-title">
              Характеристики пеллетов:
            </h4>
            <ul className="wood-pellets-body-ul">
              <li className="wood-pellets-body-li"> диаметр 6 мм</li>
              <li className="wood-pellets-body-li">зольность 0,6 %</li>
              <li className="wood-pellets-body-li">
                дерево сосна, ель, бук, дуб
              </li>
              <li className="wood-pellets-body-li">класс А1 и А2</li>
            </ul>
          </div>

          <div className="wood-pellets-business-container">
            <h3 className="wood-pellets-business">
              Компания 61 Group осуществляет поставки продукции по России, СНГ и
              всему миру.
            </h3>
          </div>

          <div className="wood-pellets-delivery-container">
            <img
              src={DeliverySVG}
              alt="Delivery icon"
              className="wood-pellets-delivery-icon"
            />
            <h4 className="wood-pellets-delivery">
              Доставка авто и ж / д транспортом.
            </h4>
          </div>
        </div>

        <div className="wood-pellets-page-col-2">
          <img
            src={ProductImage}
            alt="White Quartz"
            className="wood-pellets-col-2-product-img"
          />
          <button
            onClick={modalOnClick}
            className="wood-pellets-page-col-2-btn">
            Напишите нам
          </button>
        </div>
      </div>
    </div>
  );
};
