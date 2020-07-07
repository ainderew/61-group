import React, {useState} from "react";
import "../contact-fixed.style.scss";



export const ContactFixedRussian = () =>{
    
    //USESTATE VARS
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      //FUNCTIONS
      const formInputChange = (key, e) => {
        setFormData({
          ...formData,
          [`${key}`]: e.target.value,
        });
      };
    
      const sendForm = async e => {
        e.preventDefault();
    
        await fetch("http://localhost:5000/email", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then(response => response.json())
          .then(data => console.log(data));
      };
      
      
    return(
        <div className="contact-fixed">
            <form className="contact-form">
            <h3 className="contact-form-header">НАПИШИТЕ НАМ</h3>
            <div className="contact-form-row">
                <div className="contact-form-input-container">
                    <label htmlFor="name" className="contact-form-label">Имя</label>
                    <input value={formData.name}  onChange={e => formInputChange("name", e)} type="text" name="name" placeholder="Введите ваше имя" className="contact-form-input input-name"/>
                </div>
                <div className="contact-form-input-container">
                    <label htmlFor="email" className="contact-form-label">Телефон</label>
                    <input value={formData.email}  onChange={e => formInputChange("email", e)} type="text" name="email" placeholder="Введите ваш email или телефон" className="contact-form-input"/>
                </div>
            </div>
            <div className="contact-form-row">
                <div className="contact-form-input-container">
                    <label htmlFor="message" className="contact-form-label">Ваше сообщение</label>
                    <textarea value={formData.message}  onChange={e => formInputChange("message", e)} type="textarea" name="message" placeholder="Введите сообщение" className="contact-form-textarea"/>
                </div>
            </div>
            <button onClick = {sendForm} className="contact-form-btn">ОТПРАВИТЬ</button>
            </form>
        </div>
    )
}