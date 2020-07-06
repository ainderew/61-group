import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "../silica-sand-medium.style.scss";

//COMPONENTS
import { ContactModalRussian } from "../../../../parts/contact-modal/contact-modal-russian/contact-modal.component";
//IMAGES
import DeliverySVG from "../../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../../assets/products/Silica sand of medium fractions.webp";
export const SilicaSandMediumRussian = () => {
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
    <div ref={screen} className="silica-sand-medium-page">
      <Helmet>
        <title>
          Окатанный кварцевый песок средней фракции высокого качества от
          надежного поставщика по приемлемым ценам.
        </title>
        <meta
          name="description"
          content="Востребованным материалом в декоративной отделке является окатанный кварцевый
          песок средней фракции. Так же используется в фильтрах очистки воды и пескоструйных
          работах."
        />
      </Helmet>
      <ContactModalRussian
        modalState={modalState}
        parentFunction={modalOnClick}
      />
      <div className="silica-sand-medium-page-inner">
        <div className="silica-sand-medium-page-col-1">
          <div className="silica-sand-medium-header-container">
            {/* <h2 className="silica-sand-medium-sub-header">ТОВАРЫ</h2> */}
            <h1 className="silica-sand-medium-header">
              КВАРЦЕВЫЙ ПЕСОК СРЕДНИХ ФРАКЦИЙ
            </h1>
            <p className="silica-sand-medium-paragraph">
              Поставляемый нами кварцевый песок средней фракций очень широко
              применяется в создании водяных фильтров для водоочистных
              сооружений и компаниях используемых системы водоочистки, для
              бассейнов и в нефтяной промышленности. Так же это отличный
              дренажный материал для футбольных полей и теннисных кортов.
            </p>
          </div>
          <div className="silica-sand-medium-contact-container">
            <a href="/ContactUs/ru" className="silica-sand-medium-contact">
              Связаться с нами
            </a>
          </div>
          <div className="silica-sand-medium-body-container">
            <h4 className="silica-sand-medium-body-title">
              Песок средних фракций применяется в следующих областях:
            </h4>
            <ul className="silica-sand-medium-body-ul">
              <li className="silica-sand-medium-body-li">
                Водяные фильтры, для очистки питьевой воды
              </li>
              <li className="silica-sand-medium-body-li">
                Для пескоструйной обработки
              </li>
              <li className="silica-sand-medium-body-li">
                Для гидропескоструйной перфорации(нефтедобывающая отрасль)
              </li>
              <li className="silica-sand-medium-body-li">
                Для точного стального литья
              </li>

              <li className="silica-sand-medium-body-li">Для наливных полов</li>
              <li className="silica-sand-medium-body-li">
                Для спортивных площадок
              </li>
              <li className="silica-sand-medium-body-li">
                Для фасадной и интерьерной штукатурка
              </li>
              <li className="silica-sand-medium-body-li">
                Стадионы, теннисные корты, футбольные поля
              </li>
            </ul>
          </div>
          <div className="silica-sand-medium-body-container">
            <h4 className="silica-sand-medium-body-title">
              Фракции средних фракций кварцевого песка в наличии:
            </h4>
            <ul className="silica-sand-medium-body-ul">
              <li className="silica-sand-medium-body-li">ГС1 (1,2-0,63 мм)</li>
              <li className="silica-sand-medium-body-li">ГС2 (1,0-0,63 мм)</li>
              <li className="silica-sand-medium-body-li">ГС3 (1,25-0,8 мм)</li>
              <li className="silica-sand-medium-body-li">ГС4 (1,0-0,5 мм)</li>
              <li className="silica-sand-medium-body-li">ГС5 (1,25-0,5 мм)</li>
            </ul>
          </div>

          <div className="silica-sand-medium-business-container">
            <h3 className="silica-sand-medium-business">
              Компания 61 Group осуществляет поставки продукции по России, СНГ и
              всему миру автомобилями, железнодорожными вагонами и морскими
              контейнерами по морю.
            </h3>
          </div>

          <div className="silica-sand-medium-delivery-container">
            <img
              src={DeliverySVG}
              alt="Delivery icon"
              className="silica-sand-medium-delivery-icon"
            />
            <h4 className="silica-sand-medium-delivery">
              Delivery by Car and railway transport.
            </h4>
          </div>
        </div>

        <div className="silica-sand-medium-page-col-2">
          <img
            src={ProductImage}
            alt="White Quartz"
            className="silica-sand-medium-col-2-product-img"
          />
          <button
            onClick={modalOnClick}
            className="silica-sand-medium-page-col-2-btn">
            Напишите нам
          </button>
        </div>
      </div>
    </div>
  );
};
