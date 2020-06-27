import React from "react";
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

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
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
          {/* <div className="center-products-container"> */}
          <Carousel
            style={{
              position: "relative",
            //   width: "10rem"
            }}
            pagination={false}
            breakPoints={breakPoints}>
            <ProductHomepage
              image={SilicaSandFines}
              name={"SILICA SAND"}
              image2={SilicaSandFines2}
            />

            <ProductHomepage
              image={SilicaSandLarge}
              name={"MEDIUM FACTIONS"}
              image2={SilicaSandLarge2}
            />

            <ProductHomepage
              image={SilicaSandMedium}
              name={"MEDIUM FACTIONS"}
              image2={SilicaSandMedium2}
            />

            <ProductHomepage image={WhiteQuartz} name={"WHITE QUARTZ"} />
            <ProductHomepage image={WhiteQuartz} name={"WHITE QUARTZ"} />
          </Carousel>
          {/* </div> */}
          {/* <div className="center-find-more">
            <h1 className="center-find-more-1">NEED MORE PRODUCTS</h1>
            <h1 className="center-find-more-2">FIND IT HEAR</h1>
            <div className="center-find-more-btn-container">
              <button className="center-find-more-btn">PRODUCTS</button>
            </div>
          </div> */}
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
