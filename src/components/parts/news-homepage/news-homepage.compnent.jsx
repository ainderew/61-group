import React from "react";
import Image from "react-image-webp";
import "./news-homepage.style.scss";

export const NewsHomepage = ({
  ArticleImage,
  ArticleImage2,
  ArticleHeading,
  ArticleSecondHeading,
  ArticleDescription,
  Button,
}) => {
  return (
    <div className="news-homepage">
      <div className="inner-news-hp-row-1">
        <div className="inner-news-hp-r1-left">
          {/* <picture>
            <source srcSet={ArticleImage} type="image/webp" />
            <source srcSet={ArticleImage2} type="image/jpg" /> */}
          {/* <img
            loading="lazy"
            src={ArticleImage2}
            alt="News"
            className="news-hp-img"
          /> */}
          {/* </picture> */}
          <Image loading="lazy" src={ArticleImage2} webp={ArticleImage} className="news-hp-img" alt={ArticleHeading} />
        </div>

        <div className="inner-news-hp-r1-right">
          <h3 className="news-hp-heading">{ArticleHeading}</h3>
          <button className="news-hp-btn">{Button}</button>
        </div>
      </div>

      <div className="inner-news-hp-row-2">
        <h1 className="news-hp-row-2-heading">{ArticleSecondHeading}</h1>

        <h2 className="news-hp-row-2-body">{ArticleDescription}</h2>
      </div>
    </div>
  );
};
