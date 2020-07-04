import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
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


export const HomePage = () => {
  const [setter,setSetter] = useState(false)
  
  useEffect(() =>{
    setTimeout(() => {
        setSetter(true)
    }, 7000);
  })
  return (
    // <div className={(setter) ? "homepage" : "home-page"}>
    <div className = "homepage">
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
        </div>
      </div>

      <div className="homepage-row-4">
        <div className="hp-row-4-inner">
          <div className="hp-row-4-col-1">
          
          </div>

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
