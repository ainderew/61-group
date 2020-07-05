import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "../silica-sand-small.style.scss";

//COMPONENTS
import { ContactModalRussian } from "../../../../parts/contact-modal/contact-modal-russian/contact-modal.component";
//IMAGES
import DeliverySVG from "../../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../../assets/products/Silica sand fines.webp";

export const SilicaSandSmallRussian = () => {
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
    <div ref={screen} className="silica-sand-small-page">
      <Helmet>
        <title>
          Заказать Кварцевый песок окатанный мелких фракций оптом и с доставкой
          в компании «61 Group»
        </title>
        <meta
          name="description"
          content="Предлагаем купить востребованный в напольных покрытиях окатанный кварцевый песок
          мелкой фракции в любых объемах. Доставка осуществляется оперативно нашими
          партнерами – транспортными компаниями."
        />
      </Helmet>
      <ContactModalRussian
        modalState={modalState}
        parentFunction={modalOnClick}
      />
      <div className="silica-sand-small-page-inner">
        <div className="silica-sand-small-page-col-1">
          <div className="silica-sand-small-header-container">
            <h2 className="silica-sand-small-sub-header">ПРОДУКЦИЯ</h2>
            <h1 className="silica-sand-small-header">
              КВАРЦЕВЫЙ ПЕСОК МЕЛКИХ ФРАКЦИЙ
            </h1>
            <p className="silica-sand-small-paragraph">
              Crushed quartz sand is sand obtained by crushing veined milky
              white quartz. It has a clean uniform composition. Due to accurate
              crushing, the granules acquire a chipped form with high
              abrasiveness. Crushed milk-white quartz of high quality with a
              SiO2 content of at least 97% and a low content of clay impurities.
              The surface of the crushed particles of quartz sand has a high
              dirt holding capacity and retention.
              <br />
              <br /> The products are manufactured in accordance with TU
              08.99.29-017-16767071-2017 SiO2 content - min 98% Bulk density -
              1288 kg / m3
            </p>
          </div>
          <div className="silica-sand-small-contact-container">
            <a href="/ContactUs" className="silica-sand-small-contact">
              Связаться с нами
            </a>
          </div>
          <div className="silica-sand-small-body-container">
            <h4 className="silica-sand-small-body-title">
              Песок мелких фракций применяется в следующих областях:
            </h4>
            <ul className="silica-sand-small-body-ul">
              <li className="silica-sand-small-body-li">
                Для теннисных кортов
              </li>
              <li className="silica-sand-small-body-li">
                Для футбольных полей
              </li>
              <li className="silica-sand-small-body-li">Стекло бутылочное</li>
              <li className="silica-sand-small-body-li">Для стального литья</li>
              <li className="silica-sand-small-body-li">Для санации</li>
              <li className="silica-sand-small-body-li">Тротуарная плитка</li>
              <li className="silica-sand-small-body-li">
                Для строительных смесей
              </li>
              <li className="silica-sand-small-body-li">Черепица</li>
              <li className="silica-sand-small-body-li">
                При производстве стекла
              </li>
            </ul>
          </div>
          <div className="silica-sand-small-body-container">
            <h4 className="silica-sand-small-body-title">
              Coarse silica sand fractions available:
            </h4>
            <ul className="silica-sand-small-body-ul">
              <li className="silica-sand-small-body-li">ГМ1 (0,63-0,315мм)</li>
              <li className="silica-sand-small-body-li">ГМ2 (0,8-0,315мм)</li>
              <li className="silica-sand-small-body-li">МДФ1(0,5-0,16 мм)</li>
              <li className="silica-sand-small-body-li">МДФ2 (0,4-0,1мм)</li>
            </ul>
          </div>

          <div className="silica-sand-small-business-container">
            <h3 className="silica-sand-small-business">
              Компания 61 Group осуществляет поставки продукции по России, СНГ и
              всему миру автомобилями, железнодорожными вагонами и морскими
              контейнерами по морю.
            </h3>
          </div>

          <div className="silica-sand-small-delivery-container">
            <img
              src={DeliverySVG}
              alt="Delivery icon"
              className="silica-sand-small-delivery-icon"
            />
            <h4 className="silica-sand-small-delivery">
              Delivery by Car and railway transport.
            </h4>
          </div>
        </div>

        <div className="silica-sand-small-page-col-2">
          <img
            src={ProductImage}
            alt="White Quartz"
            className="silica-sand-small-col-2-product-img"
          />
          <button
            onClick={modalOnClick}
            className="silica-sand-small-page-col-2-btn">
            Напишите нам
          </button>
        </div>
      </div>
    </div>
  );
};
