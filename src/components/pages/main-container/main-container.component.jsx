import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./main-container.style.scss";

//PAGES
import { HomePage } from "../home-page/home-page.component";
import { HomePageRU } from "../home-page/Russian-page/home-page.component";
import { ProductsPage } from "../products-page/products-page.component";
import { ContactPage } from "../contact-page/contact-page.component";
import { AboutUsPage } from "../about-page/about-page.component";
import { WhiteQuartz } from "../Products/white-quartz/white-quartz.component";
import { SilicaSandLarge } from "../Products/silica-sand-large/silica-sand-large.component";
import { SilicaSandMedium } from "../Products/silica-sand-medium/silica-sand-medium.component";
import { SilicaSandSmall } from "../Products/silica-sand-small/silica-sand-small.component";
import { WoodPellets } from "../Products/wood-pellets/wood-pellets.component";
//COMPONENTS
import { WebNavigation } from "../../parts/web-navigation/web-navigation.component";
import { PhoneNavigation } from "../../parts/phone-navigation/phone-navigation.component";
import { Footer } from "../../parts/footer/footer.component";

export const MainContainer = () => {
  return (
    <Router>
      <div className="main-container">
        <WebNavigation />
        <PhoneNavigation />

        <Switch>
          <Route path="/" exact>
            <Redirect to="/ru" />
          </Route>
          <Route path="/ru" exact component={HomePageRU} />
          <Route path="/en" exact component={HomePage} />
          <Route path="/Products" exact component={ProductsPage} />
          <Route path="/Products/whitequartz" exact component={WhiteQuartz} />
          <Route
            path="/Products/silicasandlarge"
            exact
            component={SilicaSandLarge}
          />
          <Route
            path="/Products/silicasandmedium"
            exact
            component={SilicaSandMedium}
          />
          <Route
            path="/Products/silicasandsmall"
            exact
            component={SilicaSandSmall}
          />
          <Route path="/Products/woodpellets" exact component={WoodPellets} />
          <Route path="/ContactUs" exact component={ContactPage} />
          <Route path="/AboutUs" exact component={AboutUsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
