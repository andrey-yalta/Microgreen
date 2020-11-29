import React from "react";
import firstLogo from "../../Assets/Img/Home/first-logo.png";
import firstPhoneLogo from "../../Assets/Img/Home/first-phone-logo.png";
import firstCartLogo from "../../Assets/Img/Home/first-cart-logo.svg";
import {NavLink} from "react-router-dom";
export const Header =()=>{
    return(
    <div className="header">
        <div className="header-logo">
            <img src={firstLogo} alt="Microgreen"/>
            <span>Микрозелень <b>в Ялте </b></span>

        </div>
        <div className="header-navbar">
            <ul>
                <li><NavLink  to="/" exact>Главная</NavLink></li>
                <li><NavLink  to="/about">О нас </NavLink></li>
                <li><NavLink  to="/shop">Магазин </NavLink></li>
                <li><NavLink  to="/cart">Корзина </NavLink></li>
                {/*<li><a href="/">Контакты</a></li>*/}
            </ul>
        </div>
        <div className="header-number">
            <div>
                <img src={firstPhoneLogo} alt="+7 978 050 96 77"/>
            </div>
            <span>+7 978 050 96 77</span>
        </div>
        <div className="header-button button">
            <span>520 ₽</span>
            <div className="button-delimeter"/>
            <img src={firstCartLogo} alt=""/>
            <span>3 ₽</span>
        </div>
        <div className="header-line"/>
    </div>
    )
}