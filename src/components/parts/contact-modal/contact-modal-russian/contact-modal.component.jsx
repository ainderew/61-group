import React, { useState, useEffect } from "react";
import "../contact-modal.style.scss";

import CloseIcon from "../../../../assets/icons/close.svg";

//COMPONENTS
import { SuccessModalRussian } from "../../success modal/russian/success-modal.component";
import { ErrorModalRussian } from "../../error-modal/russian/error-modal.component";
import { Loading } from "../../loading/loading.component";

export const ContactModalRussian = ({ modalState, parentFunction }) => {
  //USESTATE VARS
  const [modalClass, setModalClass] = useState("contact-modal");
  const [animationState, setAnimationState] = useState({
    success: "off",
    error: "off",
  });
  const [loadingState, setLoadingState] = useState("off");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [emailValidationState, setEmailValidation] = useState(true);

  //FUNCTIONS
  const emailValidation = () => {
    const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (formData.email.match(emailTest) == null) {
      setEmailValidation(false);
      setFormData({
        ...formData,
        email: ""
      })
      console.log("invalid")
      return false;
    } else {
      console.log("valid")
      return true;
    }
  };

  const onServerResponse = res => {
    console.log(res);
    if (res.message === "Email Sent") {
      setAnimationState({
        ...animationState,
        success: "success-modal",
      });
    } else if (res.message === "Error") {
      console.log("error else");
      setAnimationState({
        ...animationState,
        error: "error-modal",
      });
    }
  };

  const Reset = () => {
    setAnimationState({
      success: "off",
      error: "off",
    });
  };

  const formInputChange = (key, e) => {
    setFormData({
      ...formData,
      [`${key}`]: e.target.value,
    });
  };

  const sendForm = async e => {
    
    e.preventDefault();

    if (emailValidation()) {
      setLoadingState("loading");
      await fetch("https://group61.herokuapp.com/email", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          setLoadingState("off");
          onServerResponse(data);
          console.log(data);
        });

      setTimeout(() => {
        Reset();
        parentFunction(e);
      }, 2000);
    } else {
      
    }
  };

  //USEEFFECT
  useEffect(() => {
    if (modalState) {
      setModalClass("contact-modal on");
    } else {
      setModalClass("contact-modal");
    }
  }, [modalState]);

  return (
    <div className={modalClass}>
      <SuccessModalRussian classProp={animationState.success} />
      <ErrorModalRussian classProp={animationState.error} />
      <Loading loadingClass={loadingState} />
      <img
        onClick={e => parentFunction(e)}
        src={CloseIcon}
        alt="close icon"
        className="contact-form-icon"
      />
      <form onSubmit={sendForm} className="contact-form">
        <h3 className="contact-form-header">НАПИШИТЕ НАМ</h3>
        <div className="contact-form-row">
          <div className="contact-form-input-container">
            <label htmlFor="name" className="contact-form-label">
              Имя
            </label>
            <input
              value={formData.name}
              onChange={e => formInputChange("name", e)}
              type="text"
              name="name"
              placeholder="Введите ваше имя"
              className="contact-form-input input-name"
              required
            />
          </div>
          <div className="contact-form-input-container">
            <label style = {(emailValidationState) ? null : {color: "red"}} htmlFor="email" className="contact-form-label">
              Email
            </label>
            <input
              style = {(emailValidationState) ? null : {borderColor: "red"}}
              value={formData.email}
              onChange={e => formInputChange("email", e)}
              type="text"
              name="email"
              placeholder={emailValidationState? "По желанию email" : "Укажите корректный email"}
              className="contact-form-input input-name"
              required
            />
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="phone" className="contact-form-label">
              Телефон
            </label>
            <input
              value={formData.phone}
              onChange={e => formInputChange("phone", e)}
              type="tel"
              name="phone"
              placeholder="По желанию телефон"
              className="contact-form-input"
            />
          </div>
        </div>
        <div className="contact-form-row">
          <div className="contact-form-input-container">
            <label htmlFor="message" className="contact-form-label">
              Ваше сообщение
            </label>
            <textarea
              value={formData.message}
              onChange={e => formInputChange("message", e)}
              type="textarea"
              name="message"
              placeholder="Введите сообщение"
              className="contact-form-textarea"
            />
          </div>
        </div>
        <div className="button-div">
          <button onClick={parentFunction} className="contact-form-btn">
            ОТМЕНА
          </button>
          <button type="submit" className="contact-form-btn">
            ОТПРАВИТЬ
          </button>
        </div>
      </form>
    </div>
  );
};
