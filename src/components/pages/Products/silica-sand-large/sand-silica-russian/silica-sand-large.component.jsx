import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "../silica-sand-large.style.scss";

//COMPONENTS
import { ContactModalRussian } from "../../../../parts/contact-modal/contact-modal-russian/contact-modal.component";

//IAMGES
import DeliverySVG from "../../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../../assets/products/Silica sand of large fractions.webp";
export const SilicaSandLargeRussian = () => {
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
    <div ref={screen} className="silica-sand-large-page">
      <Helmet>
        <title>
          Окатанный кварцевый песок крупной фракции – востребованный материал во
          многих отраслях.
        </title>
        <meta
          name="description"
          content="Кварцевый песок большой фракции (окатанный) добывается в городах Волгоград и
          Воронеж. Доставка материала осуществляется как по России, так и в страны СНГ."
        />
      </Helmet>
      <ContactModalRussian
        modalState={modalState}
        parentFunction={modalOnClick}
      />
      <div className="silica-sand-large-page-inner">
        <div className="silica-sand-large-page-col-1">
          <div className="silica-sand-large-header-container">
            {/* <h2 className="silica-sand-large-sub-header">PRODUCTS</h2> */}
            <h1 className="silica-sand-large-header">
              КВАРЦЕВЫЙ ПЕСОК КРУПНЫХ ФРАКЦИЙ
            </h1>
            <p className="silica-sand-large-paragraph">
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
          <div className="silica-sand-large-contact-container">
            <a href="/ContactUs" className="silica-sand-large-contact">
              Contact Us
            </a>
          </div>
          <div className="silica-sand-large-body-container">
            <h4 className="silica-sand-large-body-title">
              Песок крупных фракций применяется в следующих областях:
            </h4>
            <ul className="silica-sand-large-body-ul">
              <li className="silica-sand-large-body-li">
                Для пескоструйной обработки
              </li>
              <li className="silica-sand-large-body-li">
                Водяные фильтры для очистки питьевой воды
              </li>
              <li className="silica-sand-large-body-li">
                Для изготовления прочного бетона
              </li>
              <li className="silica-sand-large-body-li">
                Для гидропескоструйной перфорации
              </li>
              <li className="silica-sand-large-body-li">
                Фильтры для водяных скважин
              </li>
              <li className="silica-sand-large-body-li">
                Filters for pool equipment
              </li>
              <li className="silica-sand-large-body-li">
                Фильтры для оборудования бассейнов
              </li>
            </ul>
          </div>
          <div className="silica-sand-large-body-container">
            <h4 className="silica-sand-large-body-title">
              В ландшафтном дизайне.
            </h4>
            <ul className="silica-sand-large-body-ul">
              <li className="silica-sand-large-body-li">Ф1(7,0-1,6мм)</li>
              <li className="silica-sand-large-body-li">Ф2(4,0-1,6мм)</li>
              <li className="silica-sand-large-body-li">Ф3 (7,0-4,0мм)</li>
              <li className="silica-sand-large-body-li">Ф4 (5,0-2,5мм)</li>
              <li className="silica-sand-large-body-li">ГК1(1,6-1,0мм)</li>
              <li className="silica-sand-large-body-li">ГК2(2,0-1,0мм)</li>
              <li className="silica-sand-large-body-li">ГК3(3,0-1,0мм)</li>
            </ul>
          </div>

          <div className="silica-sand-large-business-container">
            <h3 className="silica-sand-large-business">
              Компания 61 Group осуществляет поставки продукции по России, СНГ и
              всему миру автомобилями, железнодорожными вагонами и морскими
              контейнерами по морю.
            </h3>
          </div>

          <div className="silica-sand-large-delivery-container">
            <img
              src={DeliverySVG}
              alt="Delivery icon"
              className="silica-sand-large-delivery-icon"
            />
            <h4 className="silica-sand-large-delivery">
              Delivery by Car and railway transport.
            </h4>
          </div>
        </div>

        <div className="silica-sand-large-page-col-2">
          <img
            src={ProductImage}
            alt="White Quartz"
            className="silica-sand-large-col-2-product-img"
          />
          <button
            onClick={modalOnClick}
            className="silica-sand-large-page-col-2-btn">
            Напишите нам
          </button>
        </div>
      </div>
    </div>
  );
};
