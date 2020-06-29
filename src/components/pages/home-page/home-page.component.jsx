import React from "react";
import { Link } from "react-router-dom";
import "./home-page.style.scss";

//DEPENDENCIES
import Carousel from "react-elastic-carousel";

//COMPONENTS
import { ProductHomepage } from "../../parts/product-homepage/product-homepage.component";
import { NewsHomepage } from "../../parts/news-homepage/news-homepage.compnent";

//IMAGES
import SilicaSandFines from "../../../assets/products/Silica sand fines.webp";
import SilicaSandFines2 from "../../../assets/products/Silica sand fines2.webp";
import SilicaSandLarge from "../../../assets/products/Silica sand of large fractions.webp";
import SilicaSandLarge2 from "../../../assets/products/Silica sand of large fractions2.webp";
import SilicaSandMedium from "../../../assets/products/Silica sand of medium fractions.webp";
import SilicaSandMedium2 from "../../../assets/products/Silica sand of medium fractions2.webp";
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
  return (
    <div className="homepage">
      <div className="header-div">
        <h1 className="header-text">
          <span className="header-span">61 GROUP,</span>
          <br /> THE BEST SERVICE FOR THE BEST PEOPLE
        </h1>
      </div>

      <div className="center-div">
        <div className="center-align-container">
          <Carousel
            showArrows={false}
            pagination={false}
            breakPoints={breakPoints}>
             <Link>
              <ProductHomepage image={SilicaSandLarge} name={"SILICA SAND"} description="large fractions" />
             </Link>
            
             <Link>
              <ProductHomepage image={SilicaSandMedium} name={"SILICA SAND"} description="medium fractions"/>
             </Link>
            
             <Link>
              <ProductHomepage image={SilicaSandFines} name={"SILICA SAND"} description="small fractions"/>
            </Link>
            
            <Link to="/Products/whitequartz"> 
              <ProductHomepage style={{display:"block"}} image={WhiteQuartz} name={"WHITE QUARTZ"} /> 
            </Link>
            
            <Link to="/Products/woodpellets"> 
              <ProductHomepage image={WoodPellets} name={"WOOD PELLETS"} />
            </Link>
          </Carousel>
        </div>
      </div>

      <div className="homepage-row-4">
        <div className="hp-row-4-inner">
          <div className="hp-row-4-col-1">
            {/* <img src={Row4IMG} alt="Covid 19" className="hp-row-4-img" /> */}
          </div>

          <div className="hp-row-4-col-2">
            <h4 className="hp-row-4-col-2-heading">
              CUSTOMER COVID-19 RECOURCE CENTER
            </h4>
            <h5 className="hp-row-4-col-2-body">
              Information and resources to support you during the global
              pandemic.
            </h5>
            <button className="hp-row-4-col-2-btn">VIEW RESOURCES</button>
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
