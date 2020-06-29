import React from "react";
import "./product-homepage.style.scss";

export const ProductHomepage = ({image, name, description}) =>{
    
    return (
      <div className="product-home">
        <h1 className="product-home-name">{name}</h1>
        <h2 className="product-home-description">{description}</h2>
        <img loading="lazy" src={image} alt="" className="product-home-img" />
      </div>
    );
}