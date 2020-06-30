import React,{useState, useRef} from "react";
import "./silica-sand-small.style.scss";

//COMPONENTS
import { ContactModal } from "../../../parts/contact-modal/contact-modal.component";
//IMAGES
import DeliverySVG from "../../../../assets/icons/delivery.svg";
import ProductImage from "../../../../assets/products/Silica sand fines.webp";

export const SilicaSandSmall = () => {
  //USEREF VARS
  const screen = useRef(null)
  //USESTATE VARS
  const [modalState, setModalState] = useState(false)
  
  //FUNCTIONS
  const modalOnClick = () =>{
    setModalState(prevState => !prevState)
    screen.current.scrollIntoView({block: "center"})
}
  return (
    <div ref={screen} className="silica-sand-small-page">
      <ContactModal modalState={modalState} parentFunction={modalOnClick} />
      <div className="silica-sand-small-page-inner">
        <div className="silica-sand-small-page-col-1">
          <div className="silica-sand-small-header-container">
            <h2 className="silica-sand-small-sub-header">PRODUCTS</h2>
            <h1 className="silica-sand-small-header">SILICA SAND (Small)</h1>
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
              <a href="#" className="silica-sand-small-contact">Contact Us</a>
          </div>
          <div className="silica-sand-small-body-container">
            <h4 className="silica-sand-small-body-title">Sand of large fractions is used in the following areas:</h4>
            <ul className="silica-sand-small-body-ul">
              <li className="silica-sand-small-body-li">For tennis courts</li>
              <li className="silica-sand-small-body-li">For soccer fields</li>
              <li className="silica-sand-small-body-li">Bottle glass</li>
              <li className="silica-sand-small-body-li">For steel casting</li>
              <li className="silica-sand-small-body-li">For reorganization</li>
              <li className="silica-sand-small-body-li">Paving slabs</li>
              <li className="silica-sand-small-body-li">For building mixtures</li>
              <li className="silica-sand-small-body-li">Roof tile</li>
              <li className="silica-sand-small-body-li">In the manufacture of glass</li>
            </ul>
          </div>
          <div className="silica-sand-small-body-container">
            <h4 className="silica-sand-small-body-title">
                Coarse silica sand fractions available:
            </h4>
            <ul className="silica-sand-small-body-ul">
              <li className="silica-sand-small-body-li">In the manufacture of glass</li>
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
          <img
            src={ProductImage}
            alt="White Quartz"
            className="silica-sand-small-col-2-product-img"
          />
          <button onClick={modalOnClick} className="silica-sand-small-page-col-2-btn">Send a Message</button>
        </div>
      </div>
    </div>
  );
};
