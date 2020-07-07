import React, {useState, useRef} from "react";
import { Helmet } from "react-helmet";
import "./wood-pellets.style.scss";

//COMPONENTS
import { ContactModal } from "../../../parts/contact-modal/contact-modal.component";
//IMAGES
import DeliverySVG from "../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../assets/products/wood-pellets.webp";
export const WoodPellets = () => {
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
      <ContactModal modalState={modalState} parentFunction={modalOnClick} />
      <Helmet>
        <title>
        Wood pellets - an environmentally friendly type of solid fuel at affordable prices.
        </title>
        <meta
          name="description"
          content="Pellets - granules are 100% wood product, they are used for comfortable heating of any
          premises. We offer to purchase the product at a wholesale price with delivery in the Russian
          Federation and abroad."
        />
      </Helmet>
      <div className="wood-pellets-page-inner">
        <div className="wood-pellets-page-col-1">
          <div className="wood-pellets-header-container">
            {/* <h2 className="wood-pellets-sub-header">PRODUCTS</h2> */}
            <h1 className="wood-pellets-header">WOOD PELLETS</h1>
            <p className="wood-pellets-paragraph">
              Wood pellets, they are pellets, is a type of environmentally
              friendly solid fuel. Wood pellets are new biomass fuel. For the
              low cost and high burning rate, it's a good substitute for
              firewood, coal, oil, gas. Wood pellets are widely used in heating,
              cooking, boiler and power plant.
            </p>
          </div>
          <div className="wood-pellets-contact-container">
            <a href="/ContactUs" className="wood-pellets-contact">
              Contact Us
            </a>
          </div>
          <div className="wood-pellets-body-container">
            <h4 className="wood-pellets-body-title">Wood pellets are used:</h4>
            <ul className="wood-pellets-body-ul">
              <li className="wood-pellets-body-li">for heating residential buildings, stoves and fireplaces</li>
              <li className="wood-pellets-body-li">for generating electricity by burning in boilers</li>
              <li className="wood-pellets-body-li">for household heating</li>
              <li className="wood-pellets-body-li">specialized pellets stoves</li>
            </ul>
          </div>
          <div className="wood-pellets-body-container">
            <h4 className="wood-pellets-body-title">
              Our company supplies high quality pellets
            </h4>
            <ul className="wood-pellets-body-ul">
              <li className="wood-pellets-body-li"> diameter 6 mm</li>
              <li className="wood-pellets-body-li">ash content 0.6</li>
            </ul>
          </div>

          <div className="wood-pellets-business-container">
            <h3 className="wood-pellets-business">
              Our company delivers in Russia and the CIS by auto and railway
              transport in big bags 1 tn at the most favorable rates.
            </h3>
          </div>

          <div className="wood-pellets-delivery-container">
            <img
              src={DeliverySVG}
              alt="Delivery icon"
              className="wood-pellets-delivery-icon"
            />
            <h4 className="wood-pellets-delivery">
              Delivery by Car and railway transport.
            </h4>
          </div>
        </div>

        <div className="wood-pellets-page-col-2">
          <img
            src={ProductImage}
            alt="White Quartz"
            className="wood-pellets-col-2-product-img"
          />
          <button onClick={modalOnClick} className="wood-pellets-page-col-2-btn">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
};
