import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Image from "react-image-webp";
import "./silica-sand-large.style.scss";

//COMPONENTS
import { ContactModal } from "../../../parts/contact-modal/contact-modal.component";

//IAMGES
import DeliverySVG from "../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../assets/products/Silica sand of large fractions.webp";
import ProductImageJPG from "../../../../assets/products/Silica sand of large fractions.jpg";
export const SilicaSandLarge = () => {
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
    <div ref={screen} className="silica-sand-large-page">
      <Helmet>
        <title>
          Coarse quartz sand is a popular material in many industries.
        </title>
        <meta
          name="description"
          content="Large fraction quartz sand (rounded) is mined in several cities of Volgograd and Voronezh.
          Material delivery is carried out both in Russia and in the CIS."
        />
      </Helmet>
      <ContactModal modalState={modalState} parentFunction={modalOnClick} />
      <div className="silica-sand-large-page-inner">
        <div className="silica-sand-large-page-col-1">
          <div className="silica-sand-large-header-container">
            {/* <h2 className="silica-sand-large-sub-header">PRODUCTS</h2> */}
            <h1 className="silica-sand-large-header">SILICA SAND (Large)</h1>
            <p className="silica-sand-large-paragraph">
              In our company you can buy sand of large fractions from 1.0 to 7.0
              mm. (different fractions). As a rule, sand of large fractions is
              used in the production of concrete products, tiles intended for
              road lining, solutions, mixtures and other building materials used
              in the construction industry.
            </p>
          </div>
          <div className="silica-sand-large-contact-container">
            <a href="/ContactUs" className="silica-sand-large-contact">
              Contact Us
            </a>
          </div>
          <div className="silica-sand-large-body-container">
            <h4 className="silica-sand-large-body-title">
              Sand of large fractions is used in the following areas:
            </h4>
            <ul className="silica-sand-large-body-ul">
              <li className="silica-sand-large-body-li">For sandblasting</li>
              <li className="silica-sand-large-body-li">
                Water filters for drinking water purification
              </li>
              <li className="silica-sand-large-body-li">
                For the manufacture of durable concrete
              </li>
              <li className="silica-sand-large-body-li">
                For hydro sandblasting perforation
              </li>
              <li className="silica-sand-large-body-li">
                Filters for water wells
              </li>
              <li className="silica-sand-large-body-li">
                Filters for pool equipment
              </li>
              <li className="silica-sand-large-body-li">In landscape design</li>
            </ul>
          </div>
          <div className="silica-sand-large-body-container">
            <h4 className="silica-sand-large-body-title">
              Coarse silica sand fractions available:
            </h4>
            <ul className="silica-sand-large-body-ul">
              <li className="silica-sand-large-body-li">F1 (7.0-1.6mm)</li>
              <li className="silica-sand-large-body-li">F2 (4.0-1.6mm)</li>
              <li className="silica-sand-large-body-li">F3 (7.0-4.0mm)</li>
              <li className="silica-sand-large-body-li">F4 (5.0-2.5mm)</li>
              <li className="silica-sand-large-body-li">GK1 (1.6-1.0mm)</li>
              <li className="silica-sand-large-body-li">GK2 (2.0-1.0mm)</li>
              <li className="silica-sand-large-body-li">GK3 (3.0-1.0mm)</li>
            </ul>
          </div>

          <div className="silica-sand-large-business-container">
            <h3 className="silica-sand-large-business">
              Our company delivers in Russia and the CIS by auto and railway
              transport in big bags 1 tn at the most favorable rates.
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
          {/* <img
            src={ProductImage}
            alt="White Quartz"
            className="silica-sand-large-col-2-product-img"
          /> */}
           <Image
            src={ProductImageJPG}
            webp={ProductImage}
            alt="Silica Sand Large Fractions"
            className="silica-sand-large-col-2-product-img"
          />
          <button
            onClick={modalOnClick}
            className="silica-sand-large-page-col-2-btn">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
};
