import React from "react";
import "./footer.style.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner-container">
        <div className="footer-col-1">
          <h5 className="footer-contact-header">CONTACT INFO</h5>
          <ul className="footer-contact-ul">
            <li className="footer-contact-li">info@61-group.ru</li>
            <li className="footer-contact-li">+7 (918) 048-34-18</li>
            <li className="footer-contact-li">+7 (995) 122-58-74</li>
            <li className="footer-contact-li">
              14 b, Rostovskoe highway, Krasnodar city, Russia
            </li>
          </ul>
        </div>

        <div className="footer-col-2">
          <h5 className="footer-product-header">PRODUCTS</h5>
          <ul className="footer-contact-ul">
            <li className="footer-contact-li">White Quartz</li>
            <li className="footer-contact-li">Silica Sand</li>
            <li className="footer-contact-li">Wood Pellets</li>
           
          </ul>
        </div>
        <div className="footer-col-1"></div>
      </div>
    </footer>
  );
};
