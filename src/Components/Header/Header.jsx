import React from "react";
import firstLogo from "../../Assets/Img/Home/first-logo.png";
import firstPhoneLogo from "../../Assets/Img/Home/first-phone-logo.png";
import firstCartLogo from "../../Assets/Img/Home/first-cart-logo.svg";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
export const Header =()=>{
    const totalCount = useSelector(state => state.cartPage.totalCount);
    const totalPrice = useSelector(state => state.cartPage.totalPrice);
    return(
    <div className="header">
        <NavLink to="/">
        <div className="header-logo">
            <img src={firstLogo} alt="Microgreen"/>
            <span>Микрозелень <br/><b>в Ялте </b></span>

        </div>
        </NavLink>
        <div className="header-navbar">
            <ul>
                <li><NavLink  to="/" exact>Главная</NavLink></li>
                <li><NavLink  to="/about">О нас </NavLink></li>
                <li><NavLink  to="/shop">Магазин </NavLink></li>
                <li><NavLink  to="/cart">Корзина </NavLink></li>
                <li><NavLink  to="/contacts">Контакты </NavLink></li>
                {/*<li><a href="/">Контакты</a></li>*/}
            </ul>
        </div>
        <div className="header-number">
            <div>
                <img src={firstPhoneLogo} alt="+7 978 050 96 77"/>
            </div>
            <span>+7 978 050 96 77</span>
        </div>
        <NavLink to="/cart">
        <div className="header-button button">
            <span>{totalPrice} ₽</span>
            <div className="button-delimeter"/>
            <img src={firstCartLogo} alt=""/>
            <span>{totalCount}</span>
        </div>
        </NavLink>
        <div className="header-line"/>
    </div>
    )
}