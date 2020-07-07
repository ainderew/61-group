import React from "react";
import "./product-homepage.style.scss";

export const ProductHomepage = ({ image, image2, name, description }) => {
  return (
    <div className="product-home">
      <h1 className="product-home-name">{name}</h1>
      <h2 className="product-home-description">{description}</h2>
      <picture>
        <source srcset={image} />
        <source srcset={image2} />
        <img loading="lazy" src={image2} alt={name} className="product-home-img" />
      </picture>
      
    </div>
  );
};
