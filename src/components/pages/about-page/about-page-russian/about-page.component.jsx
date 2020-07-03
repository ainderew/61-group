import React, { useState, useRef } from "react";
import "../about-page.style.scss";

import { ContactModalRussian } from "../../../parts/contact-modal/contact-modal-russian/contact-modal.component";

//IMAGES
import TimeImg from "../../../../assets/icons/About us/time.svg";
import LocationImg from "../../../../assets/icons/About us/location.svg";
import PhoneImg from "../../../../assets/icons/About us/phone.svg";

import AboutUs1 from "../../../../assets/images/about-us-1.webp";
import AboutUs2 from "../../../../assets/images/about-us-2.webp";
// import  from "../../../assets/images/about-us-1.webp";

export const AboutUsPageRussian = () => {
  //USEREF VARS
  const screen = useRef(null);
  //USESTATE VARS
  const [modalState, setModalState] = useState(false);

  //FUNCTIONS
  const modalOnClick = () => {
    setModalState(prevState => !prevState);
    screen.current.scrollIntoView({ block: "center" });
  };

  return (
    <div ref={screen} className="about-us">
      <ContactModalRussian
        modalState={modalState}
        parentFunction={modalOnClick}
      />
      <div className="about-us-inner">
        <div className="about-us-col-1">
          <div className="about-us-header-container">
            <h1 className="about-us-sub-header">Group 61 - Russia</h1>
            <h2 className="about-us-header">О КОМПАНИИ</h2>
          </div>
          <div className="about-us-body-container">
            <p className="about-us-body">
              Компания &quot;61 Group&quot; - это команда профессионалов,
              имеющих большой опыт по экспорту топливных пеллетов и кварцевого
              песка в страны СНГ и Европы.Мы работаем на прямую с заводами
              изготовителями, поэтому цены приемлемые. ​Наши партнеры по авто,
              ЖД и морским перевозкам качественно и оперативно рассчитают
              затраты на логистику и окажут сервис по выгодной цене, доставив
              груз качественно и надежно и точно в срок. ​Обратившись к нам, вы
              получаете надежного партнера со 100% уровнем сервиса.Для нас не
              важна огромная прибыль, для нас важна репутация и постоянство
              наших клиентов. ​И пожалуйста не судите нас по нашим победам,
              судите нас по нашим поражения, потому что их у нас практически
              нет.
            </p>
          </div>

          <div className="about-us-quote-container">
            <h1 className="about-us-quote-title">
              Добро пожаловать в компанию &quot;61 Group&quot;.
            </h1>
            <h3 className="about-us-quote">
              С Уважением и надеждой на долгосрочное и выгодное сотрудничество,
            </h3>
            <h2 className="about-us-quote-person">
              Генеральный директор Олег Лиясов
            </h2>
          </div>

          <div className="about-us-benefits-container">
            <h2 className="about-us-benefits-title">
              Преимущества при работе с нами:
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
        </div>
      </div>
    </div>
  );
};
