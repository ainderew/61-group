import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
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
import { SilicaSandArticle } from "../articles/silica-sand/russian/silica-sand.component";
import { WhiteQuartzArticle } from "../articles/white-quartz/russian/white-quartz.component"
import { WoodPelletsArticle } from "../articles/wood-pellets/russian/wood-pellets.component"
//COMPONENTS
import { WebNavigation } from "../../parts/web-navigation/web-navigation.component";
import { WebNavigationRussian } from "../../parts/web-navigation/web-navigation-russian/web-navigation.component";

import { PhoneNavigation } from "../../parts/phone-navigation/phone-navigation.component";
import { Footer } from "../../parts/footer/footer.component";
import { FooterRussian } from "../../parts/footer/footer-russian/footer.component";
import { ContactModal } from "../../parts/contact-modal/contact-modal.component";
import { ContactModalRussian } from "../../parts/contact-modal/contact-modal-russian/contact-modal.component";

const history = createBrowserHistory();

// history.listen(location => {
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

const trackingId = "UA-142208290-3"; // Replace with your Google Analytics tracking ID
// const trackingId = "UA-171678154-1"; // Replace with your Google Analytics tracking ID

ReactGA.initialize(trackingId);

//Google Analytics
const InitializeAnalytics = () => {
  ReactGA.initialize(trackingId);
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });
  ReactGA.pageview(window.location.pathname);
};

export const MainContainer = () => {
  //INITIALIZE GOOGLE ANALYTICS
  InitializeAnalytics();

  //USESELECTOR VARIABLES
  const language = useSelector(state => state.lang);

  useEffect(() => {
    console.log(language);
  }, [language]);

  //USESTATE VARS
  const [modalState, setModalState] = useState(false);

  //FUNCCTIONS
  const modalOnClick = () => {
    setModalState(prevState => !prevState);
    document.body.scrollIntoView();
  };

  return (
    <Router history={history}>
      <div className="main-container">
        {language === "Russian" ? <WebNavigationRussian /> : <WebNavigation />}
        {/* {language === "Russian" ? <PhoneNavigation /> : <PhoneNavigation />} */}
        <PhoneNavigation />
        {/* to add translation for phone nav */}

        {language === "Russian" ?  <ContactModalRussian modalState={modalState} parentFunction={modalOnClick}/> : <ContactModal modalState={modalState} parentFunction={modalOnClick} />}

        <Switch>
          <Route path="/" exact> <Redirect to="/ru"/> </Route>
          
          <Route path="/ru" exact component={HomePageRU} />
          <Route path="/en" exact component={HomePage} />
          
          <Route path="/Products" exact component={ProductsPage} />

          <Route path="/Products/whitequartz" exact component={WhiteQuartz} />
          <Route path="/Products/whitequartz/ru" exact component={WhiteQuartzRussian}/>

          <Route
            path="/Products/silicasandlarge"
            exact
            component={SilicaSandLarge}
          />
          <Route
            path="/Products/silicasandlarge/ru"
            exact
            component={SilicaSandLargeRussian}
          />

          <Route
            path="/Products/silicasandmedium"
            exact
            component={SilicaSandMedium}
          />
          <Route
            path="/Products/silicasandmedium/ru"
            exact
            component={SilicaSandMediumRussian}
          />

          <Route
            path="/Products/silicasandsmall"
            exact
            component={SilicaSandSmall}
          />
          <Route
            path="/Products/silicasandsmall/ru"
            exact
            component={SilicaSandSmallRussian}
          />

          <Route path="/Products/woodpellets" exact component={WoodPellets} />
          <Route
            path="/Products/woodpellets/ru"
            exact
            component={WoodPelletsRussian}
          />

          <Route path="/ContactUs" exact component={ContactPage} />
          <Route path="/ContactUs/ru" exact component={ContactPageRussian} />

          <Route path="/AboutUs" exact component={AboutUsPage} />
          <Route path="/AboutUs/ru" exact component={AboutUsPageRussian} />
          
          <Route path="/silica-sand-article/ru" exact component={SilicaSandArticle} />
          <Route path="/white-quartz-article/ru" exact component={WhiteQuartzArticle} />
          <Route path="/wood-pellets-article/ru" exact component={WoodPelletsArticle} />
        </Switch>
        
        
        {language === "Russian" ? (
          <FooterRussian parentFunction={modalOnClick} />
        ) : (
          <Footer parentFunction={modalOnClick} />
        )}
      </div>
    </Router>
  );
};
