import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Image from "react-image-webp";
import "./contact-page.style.scss";

//COMPONENTS
import { ContactModal } from "../../parts/contact-modal/contact-modal.component";

//IMAGES
import ContactPhoto from "../../../assets/images/contact-photo.webp";
import ContactPhotoJPG from "../../../assets/images/contact-photo.jpg";
export const ContactPage = () => {
  //USESTATE VARS
  const [modalState, setModalState] = useState(false);

  //FUNCTIONS
  const modalOnClick = (e) => {
    e.preventDefault();
    setModalState(prevState => !prevState);
  };
  return (
    <div className="contact-page">
      <Helmet>
        <title>
          Ordering materials online is carried out by e-mail, and by phone. Our
          office is in Krasnodar.
        </title>
        <meta
          name="description"
          content="E-mail address: info@61-group.ru.
          We will answer any questions by phone numbers:
          +7 (962) 877-74-58
          +7 (918) 048-34-18.
          You can visit us at:
          14 В Rostov Highway, Krasnodar, Russia."
        />
      </Helmet>
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
              Group 61 is committed to providing the highest level of customer
              service. If you didn't find the information you were looking for
              please contact us. A Corporate Service Center team member will get
              back to you.
            </p>

            <button onClick={modalOnClick} className="contact-page-btn">
              CONTACT US
            </button>

            <h2 className="contact-page-email-header">CONTACT US BY EMAIL</h2>
            <h1 className="contact-page-email">info@61-group.ru</h1>
            <h2 className="contact-page-phone-header">CONTACT US BY PHONE</h2>
            <h1 className="contact-page-phone">+7 (962) 877-74-58</h1>
            <h1 className="contact-page-phone">+7 (918) 048-34-18</h1>
            <h2 className="contact-page-email-header">VISIT US</h2>
            <h1 className="contact-page-email">
              14 b, Rostovskoe highway, Krasnodar city, Russia
            </h1>
          </div>
        </div>

        <div className="contact-page-col-2">
          <img
            src={ContactPhoto}
            alt="contact-Group 61"
            className="contact-img"
          />
          
          <Image
            src={ContactPhotoJPG}
            webp={ContactPhoto}
            alt="contact-Group 61"
            className="contact-img"
          />
        </div>
      </div>
    </div>
  );
};
