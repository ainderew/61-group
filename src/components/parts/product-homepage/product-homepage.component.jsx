import React from "react";
import "./product-homepage.style.scss";

export const ProductHomepage = ({image, image2, name}) =>{
    
    return (
      <div className="product-home">
        <h1 className="product-home-name">{name} </h1>
        <img src={image} alt="" className="product-home-img" />
      </div>
    );
}