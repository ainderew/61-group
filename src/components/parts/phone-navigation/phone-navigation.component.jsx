import React,{useState} from "react";
import "./phone-navigation.style.scss";

//COMPONENTS
import { PhoneNavOpen } from "../phone-navigation/phone-navigation-open.component";
//IMAGES
import MenuIcon from "../../../assets/icons/menu2.svg";
import MenuLogo from "../../../assets/logos/Logo.svg";
import CloseIcon from  "../../../assets/icons/close.svg";

export const PhoneNavigation = () => {
  //USESTATE VARS
  const[navState, setNavState] = useState(false);
  
  //FUNCTION
  const showMenu = () =>{
    setNavState(prevState => !prevState);
  }
  
  
  return (
    <div className="phone-nav-container">
      <header className="phone-nav">
        <div className="phone-nav-left">
          <img src={MenuLogo} alt="" className="phone-nav-logo" />
        </div>

        <div className="phone-nav-right">
          <img onClick={showMenu} src={(navState) ? CloseIcon : MenuIcon} alt="" className="phone-nav-icon" />
        </div>
      </header>
      
      <PhoneNavOpen navState={navState} toggleFunction={showMenu} />
    </div>
  );
};
