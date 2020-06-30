import React from "react";
import { useHistory } from "react-router-dom";
import "./product-productspage.style.scss";



export const ProductProductspage = ({ProductImage, ProductImageAlt, ProductName, ProductSummary, link}) =>{
  
  const history = useHistory();
  
  //FUNCTIONS
  const redirectUser = () =>{
    history.push(`${link}`)
  }
  
    return (
      <div onClick={redirectUser} className="product-productspage">
        <div className="product-pp-row-1">
          <img
            src={ProductImage}
            alt={ProductImageAlt}
            className="product-pp-img"
          />
        </div>
        <div className="product-pp-row-2">
            <h1 className="product-pp-name">{ProductName} </h1>
            <h3 className="product-pp-summary">{ProductSummary} </h3>
            <button  className="product-pp-btn">Learn more</button>
        </div>
      </div>
    );
}