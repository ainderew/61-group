import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../home-page.style.scss";

//DEPENDENCIES
import Carousel from "react-elastic-carousel";

//COMPONENTS
import { ProductHomepage } from "../../../parts/product-homepage/product-homepage.component";
import { NewsHomepage } from "../../../parts/news-homepage/news-homepage.compnent";

//IMAGES
import SilicaSandFines from "../../../../assets/products/Silica sand fines.webp";
import SilicaSandLarge from "../../../../assets/products/Silica sand of large fractions.webp";
import SilicaSandMedium from "../../../../assets/products/Silica sand of medium fractions.webp";
import WhiteQuartz from "../../../../assets/products/White fraction quartz.webp";
import WoodPellets from "../../../../assets/products/wood-pellets.webp";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1000, itemsToShow: 5 },
  { width: 1200, itemsToShow: 5 },
];

export const HomePageRU = () => {
  const [setter, setSetter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSetter(true);
    }, 7000);
  });
  return (
    // <div className={setter ? "homepage" : "home-page"}>
      <div className="homepage"> 
      <div className="header-div">
        <h1 className="header-text">
          <span className="header-span">61 GROUP</span>
          <br />
          кварцевый песок
          <br />
          белый кварц и древесные гранулы.
        </h1>
      </div>

      <div className="center-div">
        <div className="center-align-container">
          <Carousel
            showArrows={false}
            pagination={false}
            breakPoints={breakPoints}>
            <Link to="/Products/silicasandlarge">
              <ProductHomepage
                image={SilicaSandLarge}
                name={"КВАРЦЕВЫЙ ПЕСОК"}
                description="крупная фракция"
              />
            </Link>

            <Link to="/Products/silicasandmedium">
              <ProductHomepage
                image={SilicaSandMedium}
                name={"КВАРЦЕВЫЙ ПЕСОК"}
                description="(средняя фракция)"
              />
            </Link>

            <Link to="/Products/silicasandsmall">
              <ProductHomepage
                image={SilicaSandFines}
                name={"КВАРЦЕВЫЙ ПЕСОК"}
                description="мелкая фракция"
              />
            </Link>

            <Link to="/Products/whitequartz">
              <ProductHomepage
                style={{ display: "block" }}
                image={WhiteQuartz}
                name={"КВАРЦ ДРОБЛЕНЫЙ"}
                description="молочного цвета"
              />
            </Link>

            <Link to="/Products/woodpellets">
              <ProductHomepage
                image={WoodPellets}
                name={"ДРЕВЕСНЫЕ ПЕЛЛЕТЫ"}
                description="класс А1, А2"
              />
            </Link>
          </Carousel>
        </div>
      </div>

      <div className="homepage-row-4">
        <div className="hp-row-4-inner">
          <div className="hp-row-4-col-1"></div>

          <div className="hp-row-4-col-2">
            <h4 className="hp-row-4-col-2-heading">
              МЫ ДОСТАВЛЯЕМ ГРУЗОВЫМИ МАШИНАМИ, ЖЕЛЕЗНОДОРОЖНЫМИ ВАГОНАМИ И
              МОРСКИМИ КОНТЕЙНЕРАМИ (ПО МОРЮ).
            </h4>
            <h2 className="hp-row-4-col-2-body">
              Мы обеспечим доставку по самым выгодным для вас ценам.
            </h2>
          </div>
        </div>
      </div>

      <div className="bottom-div">
        <div className="bottom-news-container">
          <NewsHomepage />
          <NewsHomepage />
          <NewsHomepage />
        </div>
      </div>
    </div>
  );
};