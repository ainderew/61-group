import React, {useState, useRef} from "react";
import { Helmet } from "react-helmet"
import Image from "react-image-webp";
import "./white-quartz.style.scss";

//COMPONENTS
import { ContactModal } from "../../../parts/contact-modal/contact-modal.component";

import DeliverySVG from "../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../assets/products/White fraction quartz.webp";
import ProductImageJPG from "../../../../assets/products/White fraction quartz.jpg";

export const WhiteQuartz = () => {
  //USEREF VARS
  const screen = useRef(null)
  //USESTATE VARS
  const [modalState, setModalState] = useState(false)
  
  //FUNCTIONS
  const modalOnClick = (e) =>{
    e.preventDefault();
    setModalState(prevState => !prevState)
    screen.current.scrollIntoView({block: "center"})
}
  
  return (
    <div ref={screen} className="white-quartz-page">
      <Helmet>
        <title>
        High-quality milky white quartz crushed, used in various fields.
        </title>
        <meta
          name="description"
          content="«61 GROUP» sells white crushed quartz at an affordable cost. You can order and buy material
          online. Delivery is carried out to the near and far abroad."
        />
      </Helmet>
      <ContactModal parentFunction={modalOnClick} modalState={modalState} />
      <div className="white-quartz-page-inner">
        <div className="white-quartz-page-col-1">
          <div className="white-quartz-header-container">
            {/* <h2 className="white-quartz-sub-header">PRODUCTS</h2> */}
            <h1 className="white-quartz-header">WHITE QUARTZ</h1>
            <p className="white-quartz-paragraph">
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
          <div className="white-quartz-contact-container">
              <a href="/ContactUs" className="white-quartz-contact">Contact Us</a>
          </div>
          <div className="white-quartz-body-container">
            <h4 className="white-quartz-body-title">SCOPE OF WHITE QUARTZ</h4>
            <ul className="white-quartz-body-ul">
              <li className="white-quartz-body-li">
                {" "}
                water treatment and water treatment (supporting layer)
              </li>
              <li className="white-quartz-body-li">landscape design</li>
              <li className="white-quartz-body-li">architectural concrete</li>
            </ul>
          </div>
          <div className="white-quartz-body-container">
            <h4 className="white-quartz-body-title">
              In the presence of about 25 fractions, specify any you are
              interested in
            </h4>
            <ul className="white-quartz-body-ul">
              <li className="white-quartz-body-li">MCO (2.0-5.0 mm)</li>
              <li className="white-quartz-body-li">MCO (1.0-3.0 mm)</li>
              <li className="white-quartz-body-li">MCO (0.8-2.0 mm)</li>
              <li className="white-quartz-body-li">MCO (0.7-1.6 mm)</li>
              <li className="white-quartz-body-li">MCO (0.7-1.2 mm)</li>
              <li className="white-quartz-body-li">MCO (0.5-1.0 mm)</li>
              <li className="white-quartz-body-li">MCO (3.0-1.0 mm)</li>
            </ul>
          </div>

          <div className="white-quartz-business-container">
            <h3 className="white-quartz-business">
              Our company delivers in Russia and the CIS by auto and railway
              transport in big bags 1 tn at the most favorable rates.
            </h3>
          </div>

          <div className="white-quartz-delivery-container">
            <img
              src={DeliverySVG}
              alt="Delivery icon"
              className="white-quartz-delivery-icon"
            />
            <h4 className="white-quartz-delivery">
              Delivery by Car and railway transport.
            </h4>
          </div>
        </div>

        <div className="white-quartz-page-col-2">
          {/* <img
            src={ProductImage}
            alt="White Quartz"
            className="white-quartz-col-2-product-img"
          /> */}
            <Image
            src={ProductImageJPG}
            webp={ProductImage}
            alt="White Quartz"
            className="white-quartz-col-2-product-img"
          />
          <button onClick={modalOnClick} className="white-quartz-page-col-2-btn">Send a Message</button>
        </div>
      </div>
    </div>
  );
};
