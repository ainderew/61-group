import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./home-page.style.scss";

//DEPENDENCIES
import Carousel from "react-elastic-carousel";

//COMPONENTS
import { ProductHomepage } from "../../parts/product-homepage/product-homepage.component";
import { NewsHomepage } from "../../parts/news-homepage/news-homepage.compnent";

//IMAGES
import SilicaSandFines from "../../../assets/products/Silica sand fines.webp";
import SilicaSandLarge from "../../../assets/products/Silica sand of large fractions.webp";
import SilicaSandMedium from "../../../assets/products/Silica sand of medium fractions.webp";
import WhiteQuartz from "../../../assets/products/White fraction quartz.webp";
import WoodPellets from "../../../assets/products/wood-pellets.webp";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1000, itemsToShow: 5 },
  { width: 1200, itemsToShow: 5 },
];

export const HomePage = ({ modalState, parentFunction }) => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
        Pellets (wood pellets), quartz sand, non-metallic materials and white quartz at affordable prices.
        </title>
        <meta
          name="description"
          content="The Company 61 GROUP sells at wholesale prices non-metallic materials, white quartz, pellets
          (wood pellets) and quartz sand. You can order and buy data online."
        />
      </Helmet>
      <div className="header-div">
        <h1 className="header-text">
          <span className="header-span">61 GROUP</span>
          <br /> WHITE QUARTZ
          <br />
          SILICA SAND AND WOOD PELLETS.
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
                name={"SILICA SAND"}
                description="large fractions"
              />
            </Link>

            <Link to="/Products/silicasandmedium">
              <ProductHomepage
                image={SilicaSandMedium}
                name={"SILICA SAND"}
                description="medium fractions"
              />
            </Link>

            <Link to="/Products/silicasandsmall">
              <ProductHomepage
                image={SilicaSandFines}
                name={"SILICA SAND"}
                description="small fractions"
              />
            </Link>

            <Link to="/Products/whitequartz">
              <ProductHomepage
                style={{ display: "block" }}
                image={WhiteQuartz}
                name={"WHITE QUARTZ"}
                description="crushed"
              />
            </Link>

            <Link to="/Products/woodpellets">
              <ProductHomepage
                image={WoodPellets}
                name={"WOOD PELLETS"}
                description="class A1, A2"
              />
            </Link>
          </Carousel>

          <ul className="phone-homepage-product-ul">
            <Link to="/Products/silicasandsmall">
              <li className="phone-homepage-product-li">
                SILICA SAND (Small Fractions)
              </li>
            </Link>

            <Link to="/Products/silicasandmedium">
              <li className="phone-homepage-product-li">
                SILICA SAND (Medium Fractions)
              </li>
            </Link>
            <Link to="/Products/silicasandlarge">
              <li className="phone-homepage-product-li">
                SILICA SAND (Large Fractions)
              </li>
            </Link>
            <Link to="/Products/whitequartz">
              <li className="phone-homepage-product-li">
                WHITE QUARTZ (Crushed)
              </li>
            </Link>

            <Link to="/Products/woodpellets">
              <li className="phone-homepage-product-li">
                WOOD PELLETS (Class A1 A2)
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="homepage-row-4">
        <div className="hp-row-4-inner">
          <div className="hp-row-4-col-1"></div>

          <div className="hp-row-4-col-2">
            <h4 className="hp-row-4-col-2-heading">
              WE DELIVER BY TRUCKS, RAILWAY AND SEA CONTAINERS
            </h4>
            <h2 className="hp-row-4-col-2-body">
              We will provide delivery at the most favorable prices for you.
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
