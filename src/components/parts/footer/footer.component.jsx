import React, {useState} from "react";
import "./footer.style.scss";

//COMPONENTS

//IMAGES
import FooterDown from "../../../assets/icons/footer-down.svg"

export const Footer = ({parentFunction}) => {
  const [ulState, setUlState] = useState({
    ContatsFooter: false,
    ProductsFooter: false
  })
  
  const openUL = (number) =>{
    if (number === 1){
      setUlState({
        ...ulState,
        ContatsFooter: !ulState.ContatsFooter
      })
    }else if(number === 2){
      setUlState({
        ...ulState,
        ProductsFooter: !ulState.ProductsFooter
      })
    }
  }
  return (
    <footer className="footer">
      <div className="footer-inner-container">
        <div className="footer-col-1">
          <h5 className="footer-contact-header">CONTACT INFO</h5>
          <img onClick={()=>openUL(1)} src={FooterDown} alt="footer-expanad" className="footer-down-icon"/>
          <ul className={(ulState.ContatsFooter) ? "footer-contact-ul-open" : "footer-contact-ul"}>
            <li className="footer-contact-li">info@61-group.ru</li>
            <li className="footer-contact-li">+7 (918) 048-34-18</li>
            <li className="footer-contact-li">+7 (995) 122-58-74</li>
            <li className="footer-contact-li">
              14 b, Rostovskoe highway, Krasnodar city, Russia
            </li>
          </ul>
        </div>
        
        <div className="footer-col-2">
          <button onClick={parentFunction} className="footer-col-2-btn">CONTACT US</button>
         
        </div>

        <div className="footer-col-3">
          <div className="footer-col-3-inner">
             <h5 className="footer-product-header">PRODUCTS</h5>
             <img onClick={()=>openUL(2)} src={FooterDown} alt="footer-expanad" className="footer-down-icon"/>
             <ul className={(ulState.ProductsFooter) ? "footer-contact-ul-open" : "footer-contact-ul"} >
              <li className="footer-contact-li">White Quartz</li>
              <li className="footer-contact-li">Silica Sand</li>
              <li className="footer-contact-li">Wood Pellets</li>
             </ul>
          </div>
        </div>
        
      </div>
      <div className="footer-inner-container-2">
        <div className="footer-2-col-1">
          <h5 className="developer-info">Want your own website?</h5>
          <button className="developer-info-btn">Get in contact</button>
        </div>
        <div className="footer-2-col-2">
          <h4 className="footer-copyright">&copy;2020 61 Ltd. All rights reserved</h4>
        </div>
        <div className="footer-2-col-3"></div>
      </div>
    </footer>
  );
};
