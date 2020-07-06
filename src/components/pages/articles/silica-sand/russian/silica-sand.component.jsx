import React from "react";
import "../silica-sand.style.scss";

//IMAGES
import Image1 from "../../../../../assets/images/silica-sand-article-img-1.webp";
import Image2 from "../../../../../assets/images/silica-sand-article-img-2.webp";

export const SilicaSandArticle = () => {
  return (
    <div className="silica-sand-article">
      <div className="article-hero-banner">
        <h1 className="article-heading-text">Кварцевый песок окатанный</h1>
      </div>
      <div className="article-body">
        <div className="article-inner-body">
          <div className="article-row-1">
            <div className="article-row-1-col-left">
              <p className="article-p">
                Минеральный материал, получаемый в результате разрушения крупных
                кварцевых пород, с образованием малых фракций. Окатанный
                кварцевый песок широко используется в строительстве, а также в
                некоторых других сферах – например, в водоочистке. Добыча
                ведется либо вымыванием из водоемов, либо из карьеров – открытым
                способом. Ключевые преимущества материала – в округлой форме
                фракций и сниженной абразивности, а также небольшом количестве
                примесей. Свяжитесь с нами, чтобы заказать качественный
                окатанный кварцевый песок – мы будем рады сотрудничеству в
                оптовом формате.
              </p>
            </div>
            <div className="article-row-1-col-right">
                <img loading="lazy" src={Image1} alt="Кварцевый песок окатанный" className="article-row-1-img"/>
            </div>
          </div>
          
          <div className="article-row-2">
              <h2 className="article-h2">Свойства и особенности кварцевого песка</h2>
          </div>
          
          <div className="article-row-3">
              <div className="article-row-3-col-left"></div>
              <div className="article-row-3-col-right"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
