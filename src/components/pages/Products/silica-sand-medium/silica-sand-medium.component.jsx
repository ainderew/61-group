import React, {useState, useRef} from "react";
import "./silica-sand-medium.style.scss";

//COMPONENTS
import { ContactModal } from "../../../parts/contact-modal/contact-modal.component";
//IMAGES
import DeliverySVG from "../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../assets/products/Silica sand of medium fractions.webp";
export const SilicaSandMedium = () => {
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
      <ContactModal modalState={modalState} parentFunction={modalOnClick} />
      <div className="silica-sand-medium-page-inner">
        <div className="silica-sand-medium-page-col-1">
          <div className="silica-sand-medium-header-container">
            {/* <h2 className="silica-sand-medium-sub-header">PRODUCTS</h2> */}
            <h1 className="silica-sand-medium-header">SILICA SAND (Medium)</h1>
            <p className="silica-sand-medium-paragraph">
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
          <div className="silica-sand-medium-contact-container">
            <a href="/ContactUs" className="silica-sand-medium-contact">
              Contact Us
            </a>
          </div>
          <div className="silica-sand-medium-body-container">
            <h4 className="silica-sand-medium-body-title">
              Sand of large fractions is used in the following areas:
            </h4>
            <ul className="silica-sand-medium-body-ul">
              <li className="silica-sand-medium-body-li">
                Water filters for drinking water
              </li>
              <li className="silica-sand-medium-body-li">For sandblasting</li>
              <li className="silica-sand-medium-body-li">
                For sandblasting perforation (oil industry)
              </li>
              <li className="silica-sand-medium-body-li">
                For precision steel casting
              </li>

              <li className="silica-sand-medium-body-li">For bulk floors</li>
              <li className="silica-sand-medium-body-li">For sports grounds</li>
              <li className="silica-sand-medium-body-li">
                For front and interior plaster
              </li>
              <li className="silica-sand-medium-body-li">
                Stadiums, tennis courts, soccer fields
              </li>
            </ul>
          </div>
          <div className="silica-sand-medium-body-container">
            <h4 className="silica-sand-medium-body-title">
              Coarse silica sand fractions available:
            </h4>
            <ul className="silica-sand-medium-body-ul">
              <li className="silica-sand-medium-body-li">GS1 (1.2-0.63 mm)</li>
              <li className="silica-sand-medium-body-li">GS2 (1.0-0.63 mm)</li>
              <li className="silica-sand-medium-body-li">GS3 (1.25-0.8 mm)</li>
              <li className="silica-sand-medium-body-li">GS4 (1.0-0.5 mm)</li>
              <li className="silica-sand-medium-body-li">GS5 (1.25-0.5 mm)</li>
            </ul>
          </div>

          <div className="silica-sand-medium-business-container">
            <h3 className="silica-sand-medium-business">
              Our company delivers in Russia and the CIS by auto and railway
              transport in big bags 1 tn at the most favorable rates.
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
          <button onClick={modalOnClick} className="silica-sand-medium-page-col-2-btn">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
};
