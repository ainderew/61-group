import React from "react";
import "./main-container.style.scss";

//PAGES
import { HomePage } from "../home-page/home-page.component";

//COMPONENTS
import { WebNavigation } from "../../parts/web-navigation/web-navigation.component";
import { PhoneNavigation } from "../../parts/phone-navigation/phone-navigation.component";

export const MainContainer = () =>{
    
    return(
        
        <div className="main-container">
            <WebNavigation />
            <PhoneNavigation />
            <HomePage />
        </div>
    )
}