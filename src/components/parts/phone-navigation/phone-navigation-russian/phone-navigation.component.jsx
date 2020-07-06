import React,{useState} from "react";
import "../phone-navigation.style.scss";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { languageAction } from "../../../../redux_actions/index";
//COMPONENTS
import { PhoneNavOpen } from "../../phone-navigation/phone-navigation-open.component";
//IMAGES
import MenuIcon from "../../../../assets/icons/menu2.svg";
import MenuLogo from "../../../../assets/logos/Logo.svg";
import CloseIcon from  "../../../../assets/icons/close.svg";
import EnglishFlag from "../../../../assets/icons/uk.svg";
import RussianFlag from "../../../../assets/icons/russia.svg";

export const PhoneNavigationRussian = () => {
  const history = useHistory();
  const language = useSelector(state => state.lang)
  const dispatch = useDispatch()
  
  //USESTATE VARS
  const[navState, setNavState] = useState(false);
  
  const [translationMenuState, setTranslationMenuState] = useState(false);
  
  //FUNCTION
  const showMenu = () =>{
    setNavState(prevState => !prevState);
  }
  
  const onHover = () =>{
    setTranslationMenuState(true);
  }
  const onLeave = () =>{
    setTranslationMenuState(false);
  }
  
  const LanguageSelector = (number) =>{
    if (number === 1){
      history.push("/en")
      dispatch(languageAction("English"))
    }else if (number === 2){
      history.push("/ru")
      dispatch(languageAction("Russian"))
    }
  }
  
  return (
    <div className="phone-nav-container">
      <header className="phone-nav">
        <div className="phone-nav-left">
          <Link to="/ru">
            <img src={MenuLogo} alt="" className="phone-nav-logo" />
          </Link>
        </div>

        <div className="phone-nav-right">
          <div onMouseEnter={onHover} onMouseLeave={onLeave} className="phone-nav-translation">
            <img src={(language === "Russian") ? RussianFlag : EnglishFlag } alt="English Flag" className="phone-nav-translation-img"/>
            <h3 className="phone-nav-translation-text">{(language === "Russian") ? "Russian" : "English"}</h3>
            
            <div className={(translationMenuState) ? "phone-nav-translation-options-container" : "phone-nav-translation-options-container-off"}>
                  <div onClick={() => LanguageSelector(1)} className="phone-nav-translation-options">
                    <img src={EnglishFlag} alt="English Flag" className="phone-nav-translation-img"/>
                    <h3 className="phone-nav-translation-text">English</h3>  
                 </div>
                 <div onClick={() => LanguageSelector(2)} className="phone-nav-translation-options">
                    <img src={RussianFlag} alt="Russian Flag" className="phone-nav-translation-img"/>
                    <h3 className="phone-nav-translation-text">Russian</h3>  
                 </div>
            </div>
          </div>
          <img onClick={showMenu} src={(navState) ? CloseIcon : MenuIcon} alt="" className="phone-nav-icon" />
        </div>
      </header>
      
      <PhoneNavOpen navState={navState} toggleFunction={showMenu} />
    </div>
  );
};
