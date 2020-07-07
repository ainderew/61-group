import React from "react";
import "./product-homepage.style.scss";

export const ProductHomepage = ({ image, image2, name, description }) => {
  return (
    <div className="product-home">
      <h1 className="product-home-name">{name}</h1>
      <h2 className="product-home-description">{description}</h2>
     
        
        <img src={image2} alt={name} className="product-home-img" />

      
    </div>
  );
};
