import React from "react";
import "./news-homepage.style.scss";

//IMAGES
import News1 from "../../../assets/images/news1.webp"

export const NewsHomepage = ({ArticleImage, ArticleHeading, ArticleSecondHeading, ArticleDescription}) =>{
    
    return (
      <div className="news-homepage">
        <div className="inner-news-hp-row-1">
          <div className="inner-news-hp-r1-left">
            <img loading="lazy" src={ArticleImage} alt="News" className="news-hp-img" />
          </div>
          
          <div className="inner-news-hp-r1-right">
              <h3 className="news-hp-heading">{ArticleHeading}</h3>
              <button className="news-hp-btn">Learn More</button>
          </div>
        </div>
        
        <div className="inner-news-hp-row-2">
            <h1 className="news-hp-row-2-heading">{ArticleSecondHeading}</h1>
            
            <h2 className="news-hp-row-2-body">{ArticleDescription}</h2>
        </div>
      </div>
    );
}