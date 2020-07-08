import React, { useState } from "react";
import "../contact-fixed.style.scss";

//COMPONENTS
import { SuccessModalRussian } from "../../success modal/russian/success-modal.component";
import { ErrorModalRussian } from "../../error-modal/russian/error-modal.component";
import { Loading } from "../../loading/loading.component";

export const ContactFixedRussian = () => {
  //USESTATE VARS

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

  //FUNCTIONS
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
    setLoadingState("loading");
    e.preventDefault();

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
    }, 2000);
  };
  
  return (
    <div className="contact-fixed">
      <SuccessModalRussian classProp={animationState.success} />
      <ErrorModalRussian classProp={animationState.error} />
      <Loading loadingClass={loadingState} />
      <form className="contact-form">
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
            />
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="email" className="contact-form-label">
              Email
            </label>
            <input
              value={formData.email}
              onChange={e => formInputChange("email", e)}
              type="text"
              name="email"
              placeholder="Введите ваш email"
              className="contact-form-input input-name"
            />
          </div>
          <div className="contact-form-input-container">
            <label htmlFor="email" className="contact-form-label">
              Телефон
            </label>
            <input
              value={formData.phone}
              onChange={e => formInputChange("phone", e)}
              type="tel"
              name="phone"
              placeholder="По желанию телефон"
              className="contact-form-input input-name"
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
        <button onClick={sendForm} className="contact-form-btn">
          ОТПРАВИТЬ
        </button>
      </form>
    </div>
  );
};
