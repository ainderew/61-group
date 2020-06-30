import React, {useState} from "react";
import "./contact-page.style.scss";

//COMPONENTS
import { ContactModal } from "../../parts/contact-modal/contact-modal.component";

export const ContactPage = () => {
    //USESTATE VARS
    const [modalState, setModalState] = useState(false)
    
    //FUNCTIONS
    const modalOnClick = () =>{
        setModalState(prevState => !prevState)
    }
  return (
    <div className="contact-page">
      <ContactModal modalState={modalState} parentFunction={modalOnClick} />
      <div className="contact-page-inner">
        <div className="contact-page-col-1">
          <div className="contact-page-header-container">
            <h2 className="contact-page-header">CONTACT US</h2>
            <h4 className="contact-page-sub-heading">
              We would love to hear from you
            </h4>
          </div>

          <div className="contact-page-body-container">
            <p className="contact-page-body">
              Group 61 is committed to providing the highest level of
              customer service. If you didn't find the information you were
              looking for please contact us. A Corporate Service Center team
              member will get back to you.
            </p>
            
            <button onClick={modalOnClick} className="contact-page-btn">CONTACT GROUP 61</button>
            
            <h2 className="contact-page-email-header">CONTACT US BY EMAIL</h2>
            <h1 className="contact-page-email">info@61-group.ru</h1>
            <h2 className="contact-page-phone-header">CONTACT US BY PHONE</h2>
            <h1 className="contact-page-phone">+7 (962) 877-74-58</h1>
            <h1 className="contact-page-phone">+7 (918) 048-34-18</h1>
            <h2 className="contact-page-email-header">VISIT US</h2>
            <h1 className="contact-page-email">14 b, Rostovskoe highway, Krasnodar city, Russia</h1>
          </div>
        </div>

        <div className="contact-page-col-2"></div>
      </div>
    </div>
  );
};