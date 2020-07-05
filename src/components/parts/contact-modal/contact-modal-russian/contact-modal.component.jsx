import React, {useState, useEffect} from "react";
import "../contact-modal.style.scss";

import CloseIcon from "../../../../assets/icons/close.svg"

export const ContactModalRussian = ({modalState,parentFunction}) =>{
    
    //USESTATE VARS
    const [modalClass, setModalClass] = useState("contact-modal")
    
    //USEEFFECT
    useEffect(() => {
        if(modalState){
            setModalClass("contact-modal on")
        }else{
            setModalClass("contact-modal")
        }
    },[modalState])
    
    return(
        <div className={modalClass}>
            <img onClick={()=>parentFunction()} src={CloseIcon} alt="close icon" className="contact-form-icon"/>
            <form className="contact-form">
            <h3 className="contact-form-header">НАПИШИТЕ НАМ</h3>
            <div className="contact-form-row">
                <div className="contact-form-input-container">
                    <label htmlFor="name" className="contact-form-label">Имя</label>
                    <input type="text" name="name" placeholder="Введите ваше имя" className="contact-form-input input-name"/>
                </div>
                <div className="contact-form-input-container">
                    <label htmlFor="email" className="contact-form-label">Телефон</label>
                    <input type="text" name="email" placeholder="Введите ваш email или телефон" className="contact-form-input"/>
                </div>
            </div>
            <div className="contact-form-row">
                <div className="contact-form-input-container">
                    <label htmlFor="message" className="contact-form-label">Ваше сообщение</label>
                    <textarea type="textarea" name="message" placeholder="Введите сообщение" className="contact-form-textarea"/>
                </div>
            </div>
            <button className="contact-form-btn">ОТПРАВИТЬ</button>
            <button className="contact-form-btn">ОТПРАВИТЬ</button>
            </form>
        </div>
    )
}