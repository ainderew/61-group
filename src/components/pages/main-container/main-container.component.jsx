import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./main-container.style.scss";

//PAGES
import { HomePage } from "../home-page/home-page.component";
import { HomePageRU } from "../home-page/Russian-page/home-page.component";
import { ProductsPage } from "../products-page/products-page.component";
import { ContactPage } from "../contact-page/contact-page.component";
import { ContactPageRussian } from "../contact-page/contact-page-russian/contact-page.component";
import { AboutUsPage } from "../about-page/about-page.component";
import { AboutUsPageRussian } from "../about-page/about-page-russian/about-page.component";
import { WhiteQuartz } from "../Products/white-quartz/white-quartz.component";
import { WhiteQuartzRussian } from "../Products/white-quartz/white-quartz-russian/white-quartz.component";
import { SilicaSandLarge } from "../Products/silica-sand-large/silica-sand-large.component";
import { SilicaSandLargeRussian } from "../Products/silica-sand-large/sand-silica-russian/silica-sand-large.component";
import { SilicaSandMedium } from "../Products/silica-sand-medium/silica-sand-medium.component";
import { SilicaSandMediumRussian } from "../Products/silica-sand-medium/silica-sand-medium-russian/silica-sand-medium.component";
import { SilicaSandSmall } from "../Products/silica-sand-small/silica-sand-small.component";
import { SilicaSandSmallRussian } from "../Products/silica-sand-small/silica-sand-small-russian/silica-sand-small.component";
import { WoodPellets } from "../Products/wood-pellets/wood-pellets.component";
import { WoodPelletsRussian } from "../Products/wood-pellets/wood-pellets-russian/wood-pellets.component";
//COMPONENTS
import { WebNavigation } from "../../parts/web-navigation/web-navigation.component";
import { WebNavigationRussian } from "../../parts/web-navigation/web-navigation-russian/web-navigation.component";

import { PhoneNavigation } from "../../parts/phone-navigation/phone-navigation.component";
import { Footer } from "../../parts/footer/footer.component";
import { FooterRussian } from "../../parts/footer/footer-russian/footer.component";

export const MainContainer = () => {
  const language = useSelector(state => state.lang)
  // let language = localStorage.getItem("Language")
  useEffect(() =>{
    console.log(language)
  },[language])


  //USESTATE VARS
  const [modalState, setModalState] = useState(false)
 
 //FUNCCTIONS
  const modalOnClick = () =>{
        setModalState(prevState => !prevState)
        window.scrollIntoView({ block: "center" })
  }

  return (
    <Router>
      <div className="main-container">
        {(language === "Russian") ? <WebNavigationRussian /> : <WebNavigation />}
        
        <PhoneNavigation />
{/* to add translation for phone nav */}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/ru" />
          </Route>

          <Route path="/ru" exact render={(props) => <HomePageRU {...props} modalState={modalState} parentFunction={modalOnClick} />} />
          <Route path="/en" exact render={(props) => <HomePage {...props} modalState={modalState} parentFunction={modalOnClick} />} />
          <Route path="/Products" exact component={ProductsPage} />
          
          <Route path="/Products/whitequartz" exact component={WhiteQuartz} />
          <Route path="/Products/whitequartz/ru" exact component={WhiteQuartzRussian} />
          
          <Route path="/Products/silicasandlarge" exact component={SilicaSandLarge}/>
          <Route path="/Products/silicasandlarge/ru" exact component={SilicaSandLargeRussian}/>
          
          <Route path="/Products/silicasandmedium"exact component={SilicaSandMedium} />
          <Route path="/Products/silicasandmedium/ru"exact component={SilicaSandMediumRussian} />
          
          <Route path="/Products/silicasandsmall" exact component={SilicaSandSmall}/>
          <Route path="/Products/silicasandsmall/ru" exact component={SilicaSandSmallRussian}/>
          
          <Route path="/Products/woodpellets" exact component={WoodPellets} />
          <Route path="/Products/woodpellets/ru" exact component={WoodPelletsRussian} />
          
          <Route path="/ContactUs" exact component={ContactPage} />
          <Route path="/ContactUs/ru" exact component={ContactPageRussian} />
          
          <Route path="/AboutUs" exact component={AboutUsPage} />
          <Route path="/AboutUs/ru" exact component={AboutUsPageRussian} />
        </Switch>
        {(language === "Russian") ? <FooterRussian parentFunction={modalOnClick} /> : <Footer parentFunction={modalOnClick} />}
      </div>
    </Router>
  );
};
