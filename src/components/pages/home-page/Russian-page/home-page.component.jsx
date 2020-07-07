import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../home-page.style.scss";

//DEPENDENCIES
import Carousel from "react-elastic-carousel";

//COMPONENTS
import { ProductHomepage } from "../../../parts/product-homepage/product-homepage.component";
import { NewsHomepage } from "../../../parts/news-homepage/news-homepage.compnent";

//IMAGES
import SilicaSandFines from "../../../../assets/products/Silica sand fines.webp";
import SilicaSandFinesJPG from "../../../../assets/products/Silica sand fines.jpg";

import SilicaSandLarge from "../../../../assets/products/Silica sand of large fractions.webp";
import SilicaSandLargeJPG from "../../../../assets/products/Silica sand of large fractions.jpg";

import SilicaSandMedium from "../../../../assets/products/Silica sand of medium fractions.webp";
import SilicaSandMediumJPG from "../../../../assets/products/Silica sand of medium fractions.jpg";

import WhiteQuartz from "../../../../assets/products/White fraction quartz.webp";
import WhiteQuartzJPG from "../../../../assets/products/White fraction quartz.jpg";

import WoodPellets from "../../../../assets/products/wood-pellets.webp";
import WoodPelletsJPG from "../../../../assets/products/wood-pellets.jpg";

import ArticleSilicaSand from "../../../../assets/images/silica-sand-article-home-img.webp";
import ArticleSilicaSandJPG from "../../../../assets/images/silica-sand-article-home-img.jpg";

import ArticleWhiteQuartz from "../../../../assets/images/white-quartz-article.webp";
import ArticleWhiteQuartzJPG from "../../../../assets/images/white-quartz-article.jpg";

import ArticleWoodPellets from "../../../../assets/images/wood-pellets-article.webp";
import ArticleWoodPelletsJPG from "../../../../assets/images/wood-pellets-article.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1000, itemsToShow: 5 },
  { width: 1200, itemsToShow: 5 },
];

export const HomePageRU = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          Пеллеты (древесные гранулы), кварцевый песок, нерудные материалы и
          белый кварц по доступным ценам.
        </title>
        <meta
          name="description"
          content="Компания 61 GROUP реализует по оптовым ценам нерудные материалы, белый кварц,
пеллеты (древесные гранулы) и кварцевый песок. Заказать и купить данные материалы
можно онлайн."
        />
      </Helmet>
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
            <Link to="/Products/silicasandlarge/ru">
              <ProductHomepage
                image={SilicaSandLarge}
                image2={SilicaSandLargeJPG}
                name={"КВАРЦЕВЫЙ ПЕСОК"}
                description="крупная фракция"
              />
            </Link>

            <Link to="/Products/silicasandmedium/ru">
              <ProductHomepage
                image={SilicaSandMedium}
                image2={SilicaSandMediumJPG}
                name={"КВАРЦЕВЫЙ ПЕСОК"}
                description="(средняя фракция)"
              />
            </Link>

            <Link to="/Products/silicasandsmall/ru">
              <ProductHomepage
                image={SilicaSandFines}
                image2={SilicaSandFinesJPG}
                name={"КВАРЦЕВЫЙ ПЕСОК"}
                description="мелкая фракция"
              />
            </Link>

            <Link to="/Products/whitequartz/ru">
              <ProductHomepage
                style={{ display: "block" }}
                image={WhiteQuartz}
                image2={WhiteQuartzJPG}
                name={"КВАРЦ ДРОБЛЕНЫЙ"}
                description="молочного цвета"
              />
            </Link>

            <Link to="/Products/woodpellets/ru">
              <ProductHomepage
                image={WoodPellets}
                image2={WoodPelletsJPG}
                name={"ДРЕВЕСНЫЕ ПЕЛЛЕТЫ"}
                description="класс А1, А2"
              />
            </Link>
          </Carousel>

          <ul className="phone-homepage-product-ul">
            <Link to="/Products/silicasandsmall/ru">
              <li className="phone-homepage-product-li">
                КВАРЦЕВЫЙ ПЕСОК (мелкая фракция)
              </li>
            </Link>

            <Link to="/Products/silicasandmedium/ru">
              <li className="phone-homepage-product-li">
                КВАРЦЕВЫЙ ПЕСОК (средняя фракция)
              </li>
            </Link>
            <Link to="/Products/silicasandlarge/ru">
              <li className="phone-homepage-product-li">
                КВАРЦЕВЫЙ ПЕСОК (крупная фракция)
              </li>
            </Link>
            <Link to="/Products/whitequartz/ru">
              <li className="phone-homepage-product-li">
                КВАРЦ ДРОБЛЕНЫЙ (молочного цвета)
              </li>
            </Link>

            <Link to="/Products/woodpellets/ru">
              <li className="phone-homepage-product-li">
                ДРЕВЕСНЫЕ ПЕЛЛЕТЫ (класс А1, А2)
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
          <Link to="/silica-sand-article/ru">
            <NewsHomepage
              ArticleImage={ArticleSilicaSand}
              ArticleImage2={ArticleSilicaSandJPG}
              ArticleHeading={"Кварцевый песок окатанный"}
              ArticleSecondHeading={"Кварцевый песок"}
              ArticleDescription={
                "Минеральный материал, получаемый в результате разрушения крупных кварцевых пород, с образованием"
              }
              Button={"Читать дальше"}
            />
          </Link>

          <Link to="/white-quartz-article/ru">
            <NewsHomepage
              ArticleImage={ArticleWhiteQuartz}
              ArticleImage2={ArticleWhiteQuartzJPG}
              ArticleHeading={"Белый молочный дробленный кварц"}
              ArticleSecondHeading={"Белый кварц"}
              ArticleDescription={
                "Предлагаем дробленый кварц в виде остроугольных зерен."
              }
              Button={"Читать дальше"} 
              />
          </Link>
          
          <Link to="/wood-pellets-article/ru">
            <NewsHomepage
              ArticleImage={ArticleWoodPellets}
              ArticleImage2={ArticleWoodPelletsJPG}
              ArticleHeading={"Древесные топливные пеллеты"}
              ArticleSecondHeading={"Древесные пеллеты"}
              ArticleDescription={
                "Пеллеты – это топливные гранулы в виде спрессованной древесной стружки."
              }
              Button={"Читать дальше"} 
              />
          </Link>

        </div>
      </div>
    </div>
  );
};
