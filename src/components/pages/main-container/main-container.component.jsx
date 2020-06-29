import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main-container.style.scss";

//PAGES
import { HomePage } from "../home-page/home-page.component";
import { ProductsPage } from "../products-page/products-page.component";
import { WhiteQuartz } from "../Products/white-quartz/white-quartz.component";
//COMPONENTS
import { WebNavigation } from "../../parts/web-navigation/web-navigation.component";
import { PhoneNavigation } from "../../parts/phone-navigation/phone-navigation.component";
import { Footer } from "../../parts/footer/footer.component";

export const MainContainer = () =>{
    
    return (
      <Router>
        <div className="main-container">
          <WebNavigation />
          <PhoneNavigation />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Products" exact component={ProductsPage} />
            <Route path="/Products/whitequartz" exact component={WhiteQuartz} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
}