import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import Image from "react-image-webp";
import "./silica-sand-small.style.scss";

//COMPONENTS
import { ContactModal } from "../../../parts/contact-modal/contact-modal.component";
//IMAGES
import DeliverySVG from "../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../assets/products/Silica sand fines.webp";
import ProductImageJPG from "../../../../assets/products/Silica sand fines.jpg";

export const SilicaSandSmall = () => {
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
    <div ref={screen} className="silica-sand-small-page">
      <Helmet>
        <title>
          Order Quartz sand rounded of fine fractions in bulk and with delivery
          to the &lt;61 Group&gt; company.
        </title>
        <meta
          name="description"
          content="We offer to buy rounded quartz sand of a fine fraction demanded in floor coverings in any
          volumes. Delivery is carried out promptly by our partners - transport companies."
        />
      </Helmet>
      <ContactModal modalState={modalState} parentFunction={modalOnClick} />
      <div className="silica-sand-small-page-inner">
        <div className="silica-sand-small-page-col-1">
          <div className="silica-sand-small-header-container">
            {/* <h2 className="silica-sand-small-sub-header">PRODUCTS</h2> */}
            <h1 className="silica-sand-small-header">SILICA SAND (Small)</h1>
            <p className="silica-sand-small-paragraph">
              Our fine quartz sand is in great demand. This is an excellent
              material used for hydraulic fracturing in the oil industry. Fine
              sand is also widely used in the production of colored glass. It is
              widely used in the steel industry, as well as in the production of
              building mixes.
            </p>
          </div>
          <div className="silica-sand-small-contact-container">
            <a href="/ContactUs" className="silica-sand-small-contact">
              Contact Us
            </a>
          </div>
          <div className="silica-sand-small-body-container">
            <h4 className="silica-sand-small-body-title">
              Sand of large fractions is used in the following areas:
            </h4>
            <ul className="silica-sand-small-body-ul">
              <li className="silica-sand-small-body-li">For tennis courts</li>
              <li className="silica-sand-small-body-li">For soccer fields</li>
              <li className="silica-sand-small-body-li">Bottle glass</li>
              <li className="silica-sand-small-body-li">For steel casting</li>
              <li className="silica-sand-small-body-li">For reorganization</li>
              <li className="silica-sand-small-body-li">Paving slabs</li>
              <li className="silica-sand-small-body-li">
                For building mixtures
              </li>
              <li className="silica-sand-small-body-li">Roof tile</li>
              <li className="silica-sand-small-body-li">
                In the manufacture of glass
              </li>
            </ul>
          </div>
          <div className="silica-sand-small-body-container">
            <h4 className="silica-sand-small-body-title">
              Coarse silica sand fractions available:
            </h4>
            <ul className="silica-sand-small-body-ul">
              <li className="silica-sand-small-body-li">GM1 (0.63-0.315mm)</li>
              <li className="silica-sand-small-body-li">GM2 (0.8-0.315mm)</li>
              <li className="silica-sand-small-body-li">MDF1 (0.5-0.16 mm)</li>
              <li className="silica-sand-small-body-li">MDF2 (0.4-0.1mm)</li>
            </ul>
          </div>

          <div className="silica-sand-small-business-container">
            <h3 className="silica-sand-small-business">
              Our company delivers in Russia and the CIS by auto and railway
              transport in big bags 1 tn at the most favorable rates.
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
          {/* <img
            src={ProductImage}
            alt="White Quartz"
            className="silica-sand-small-col-2-product-img"
          /> */}
          <Image
            src={ProductImageJPG}
            webp={ProductImage}
            alt="Silica Sand Small Fraction"
            className="silica-sand-small-col-2-product-img"
          />
          <button
            onClick={modalOnClick}
            className="silica-sand-small-page-col-2-btn">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
};
