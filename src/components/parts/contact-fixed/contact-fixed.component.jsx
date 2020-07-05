import React, {useState, useEffect} from "react";
import "./contact-fixed.style.scss";

import CloseIcon from "../../../assets/icons/close.svg"

export const ContactModal = ({modalState,parentFunction}) =>{
    
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
            <h3 className="contact-form-header">CONTACT US</h3>
            <div className="contact-form-row">
                <div className="contact-form-input-container">
                    <label htmlFor="name" className="contact-form-label">Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" className="contact-form-input input-name"/>
                </div>
                <div className="contact-form-input-container">
                    <label htmlFor="email" className="contact-form-label">Email/Phone</label>
                    <input type="text" name="email" placeholder="Enter Your Email and/or Phone Number" className="contact-form-input"/>
                </div>
            </div>
            <div className="contact-form-row">
                <div className="contact-form-input-container">
                    <label htmlFor="message" className="contact-form-label">Message</label>
                    <textarea type="textarea" name="message" placeholder="Enter Your Name" className="contact-form-textarea"/>
                </div>
            </div>
            <button className="contact-form-btn">SUBMIT</button>
            </form>
        </div>
    )
}