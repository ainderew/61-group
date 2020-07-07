import React, {useState} from "react";
import "./contact-fixed.style.scss";


export const ContactFixedEnglish = ({modalState,parentFunction}) =>{

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
    
        await fetch("https://group61.herokuapp.com/email", {
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
            <h3 className="contact-form-header">CONTACT US</h3>
            <div className="contact-form-row">
                <div className="contact-form-input-container">
                    <label htmlFor="name" className="contact-form-label">Name</label>
                    <input value={formData.name}  onChange={e => formInputChange("name", e)} type="text" name="name" placeholder="Enter Your Name" className="contact-form-input input-name"/>
                </div>
                <div className="contact-form-input-container">
                    <label htmlFor="email" className="contact-form-label">Email/Phone</label>
                    <input value={formData.email}  onChange={e => formInputChange("email", e)} type="text" name="email" placeholder="Enter Your Email and/or Phone Number" className="contact-form-input"/>
                </div>
            </div>
            <div className="contact-form-row">
                <div className="contact-form-input-container">
                    <label htmlFor="message" className="contact-form-label">Message</label>
                    <textarea value={formData.message}  onChange={e => formInputChange("message", e)} type="textarea" name="message" placeholder="Enter Your Name" className="contact-form-textarea"/>
                </div>
            </div>
            <button onClick={sendForm} className="contact-form-btn">SUBMIT</button>
            </form>
        </div>
    )
}