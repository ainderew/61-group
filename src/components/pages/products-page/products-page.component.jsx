import React, {useEffect} from "react";
import "./products-page.style.scss";

//COMPONENTS
import { ProductProductspage } from "../../parts/product-productspage/product-productspage.component";

//IMAGES
import WhiteQuartz from "../../../assets/products/White_quartz_productpage.webp";
import WoodPellets from "../../../assets/products/wood-pellets.webp";
import SandSilicaLarge from "../../../assets/products/Silica sand of large fractions.webp";
import SandSilicaMedium from "../../../assets/products/Silica sand of medium fractions.webp";
import SandSilicaSmall from "../../../assets/products/Silica sand fines.webp";


export const ProductsPage = () => {
  
  useEffect(() => {
    
    document.title ="Products"
    
  },[])
  
  
  return (
    <div className="products-page">
      <div className="products-page-row-1">
        <h3 className="products-page-header">WE FIND WAYS</h3>
      </div>

      <div className="products-page-row-2">
        <div className="products-body-row-1">
          <div className="products-body-row-1-inner">
            <h1 className="products-body-heading">PRODUCTS</h1>
            <div className="products-body-paragraph-container">
              <p className="products-body-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis voluptas minima nemo ab nulla quos necessitatibus
                ullam illum quasi quae? Deleniti quia possimus totam molestias
                quis dolorum nam quod distinctio vitae nisi, natus ea quae
                necessitatibus eos fugit sapiente laudantium.
              </p>
            </div>
          </div>
        </div>
        <div className="products-body-row-2">
          <div className="products-body-row-2-inner">
            <ProductProductspage
              ProductImage={WhiteQuartz}
              ProductImageAlt="White Quartz"
              ProductName="WHITE QUARTZ"
              ProductSummary="Crushed milk-white quartz of high quality with a SiO2 content of at least 97% and a low content of clay impurities."
              link="/Products/whitequartz"
            />
            <ProductProductspage
              ProductImage={WoodPellets}
              ProductImageAlt="wood pellets"
              ProductName="WOOD PELLETS"
              ProductSummary="Crushed milk-white quartz of high quality with a SiO2 content of at least 97% and a low content of clay impurities."
              link="/Products/woodpellets"
            />
            <ProductProductspage
              ProductImage={SandSilicaSmall}
              ProductImageAlt="sand silica small"
              ProductName="SILICA SAND SMALL"
              ProductSummary="Crushed milk-white quartz of high quality with a SiO2 content of at least 97% and a low content of clay impurities."
              link="/Products/silicasandsmall"
            />
            <ProductProductspage
              ProductImage={SandSilicaMedium}
              ProductImageAlt="SILICA SAND medium"
              ProductName="SAND SILICA MEDIUM"
              ProductSummary="Crushed milk-white quartz of high quality with a SiO2 content of at least 97% and a low content of clay impurities."
              link="/Products/silicasandmedium"
            />
            <ProductProductspage
              ProductImage={SandSilicaLarge}
              ProductImageAlt="SILICA SAND large"
              ProductName="SAND SILICA LARGE"
              ProductSummary="Crushed milk-white quartz of high quality with a SiO2 content of at least 97% and a low content of clay impurities."
              link="/Products/silicasandlarge"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
