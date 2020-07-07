import React from "react";
import { Helmet } from "react-helmet";
import Image from "react-image-webp";
import "./about-page.style.scss";

import { ContactFixedEnglish } from "../../parts/contact-fixed/contact-fixed.component";

//IMAGES
import TimeImg from "../../../assets/icons/About us/time.svg";
import LocationImg from "../../../assets/icons/About us/location.svg";
import PhoneImg from "../../../assets/icons/About us/phone.svg";

import AboutUs1 from "../../../assets/images/about-us-1.webp";
import AboutUs2 from "../../../assets/images/about-us-2.webp";
// import  from "../../../assets/images/about-us-1.webp";

export const AboutUsPage = () => {
  return (
    <div className="about-us">
      <Helmet>
        <title>
          The 61 Group company is a reliable partner in the supply of
          non-metallic materials.
        </title>
        <meta
          name="description"
          content="For several years, our company has been engaged in the wholesale supply of white quartz, wood
          pellets, quartz sand and non-metallic materials both in Russia and in countries near and far
          abroad."
        />
      </Helmet>
      <div className="about-us-inner">
        <div className="about-us-col-1">
          <div className="about-us-header-container">
            <h1 className="about-us-sub-header">Group 61 - Russia</h1>
            <h2 className="about-us-header">ABOUT THE COMPANY</h2>
          </div>
          <div className="about-us-body-container">
            <p className="about-us-body">
              The company "61 Group" is a team of professionals with extensive
              experience in exporting fuel pellets and quartz sand to the CIS
              countries and Europe. We work directly with manufacturers, so the
              prices are reasonable. ​ Our partners in auto, railway and sea
              transportation will efficiently and promptly calculate logistics
              costs and provide service at a bargain price, delivering the goods
              efficiently and reliably and on time. ​ Turning to us, you get a
              reliable partner with a 100% level of service. ​ A huge profit is
              not important for us, the reputation and constancy of our
              customers is important to us. ​ And please do not judge us by our
              victories, judge us by our defeats, because we practically do not
              have them. ​
            </p>
          </div>

          <div className="about-us-quote-container">
            <h1 className="about-us-quote-title">Welcome to the 61 Group.</h1>
            <h3 className="about-us-quote">
              "With respect and hope for a long-term and profitable
              cooperation."
            </h3>
            <h2 className="about-us-quote-person">-CEO Oleg Liyasov</h2>
          </div>

          <div className="about-us-benefits-container">
            <h2 className="about-us-benefits-title">
              BENEFITS WHEN WORKING WITH US:
            </h2>
          </div>
          {/* START OF THE BENEFIT LIST */}
          <div className="about-us-benefit-list-container">
            <div className="about-us-benefit-list-inner">
              <div className="about-us-benefit-header-container">
                <img
                  src={TimeImg}
                  alt="Customer Time Allocation"
                  className="about-us-benefit-img"
                />
                <h3 className="about-us-benefit-header">
                  Increased attention to customer needs
                </h3>
              </div>
              <div className="about-us-benefit-body-container">
                <p className="about-us-benefit-body">
                  We appreciate all your wishes, and try to provide a service in
                  accordance with your request. The quality pellets and quartz
                  sand we supply.
                </p>
              </div>
            </div>
            {/* LOCATION */}
            <div className="about-us-benefit-list-inner">
              <div className="about-us-benefit-header-container">
                <img
                  src={LocationImg}
                  alt="Customer Time Allocation"
                  className="about-us-benefit-img"
                />
                <h3 className="about-us-benefit-header">
                  Prompt and quality delivery
                </h3>
              </div>
              <div className="about-us-benefit-body-container">
                <p className="about-us-benefit-body">
                  We work with regular and reliable partners, which is why your
                  goods will be delivered on time and at an affordable price. We
                  carry out deliveries of cars, railway and sea transport.
                </p>
              </div>
            </div>

            {/* PERSONAL MANAGER */}
            <div className="about-us-benefit-list-inner">
              <div className="about-us-benefit-header-container">
                <img
                  src={PhoneImg}
                  alt="Customer Time Allocation"
                  className="about-us-benefit-img"
                />
                <h3 className="about-us-benefit-header">
                  Personal manager 24/7
                </h3>
              </div>
              <div className="about-us-benefit-body-container">
                <p className="about-us-benefit-body">
                  In many companies, you have a duty to wait for an answer, in
                  our case you will be provided with a personal manager,
                  available 24/7 in any way convenient for you to contact.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-col-2">
          <img src={AboutUs1} alt="about 1" className="about-us-img" />
          <img src={AboutUs2} alt="about 2" className="about-us-img" />
          <ContactFixedEnglish />
        </div>
      </div>
    </div>
  );
};
