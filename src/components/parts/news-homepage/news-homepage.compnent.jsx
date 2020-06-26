import React from "react";
import "./news-homepage.style.scss";

//IMAGES
import News1 from "../../../assets/images/news1.webp"

export const NewsHomepage = () =>{
    
    return (
      <div className="news-homepage">
        <div className="inner-news-hp-row-1">
          <div className="inner-news-hp-r1-left">
            <img loading="lazy" src={News1} alt="News" className="news-hp-img" />
          </div>
          
          <div className="inner-news-hp-r1-right">
              <h3 className="news-hp-heading">BENEFITS OF USING QUARTZ AND WHY YOU SHOULD USE QUARTZ</h3>
              <button className="news-hp-btn">Learn More</button>
          </div>
        </div>
        
        <div className="inner-news-hp-row-2">
            <h1 className="news-hp-row-2-heading">GROUP 61 LTD.</h1>
            
            <h2 className="news-hp-row-2-body">We are based on Russia and we export Silica sand, White quartz and Wood pellets</h2>
        </div>
      </div>
    );
}