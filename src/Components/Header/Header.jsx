import React from "react";
import firstLogo from "../../Assets/Img/Home/first-logo.png";
import firstPhoneLogo from "../../Assets/Img/Home/first-phone-logo.png";
import firstCartLogo from "../../Assets/Img/Home/first-cart-logo.svg";
import hamburger from"../../Assets/Img/Home/hamburger.png"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {setSelectedSortBy} from "../../Redux/microgreen-reducer";
export const Header =()=>{
    const totalCount = useSelector(state => state.cartPage.totalCount);
    const totalPrice = useSelector(state => state.cartPage.totalPrice);


    const onSelectSortType =(type) => {
        setVisibleSort(false);
        setActiveItem(type);
    };
    // здесь по клику вызываем санку и устанавливаем тип сортировки в стейте

    const [visibleSort, setVisibleSort] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    // это уже локальный стейт для отображегия активного(выбранного) элемента сортировки и видимости/невидимости списка


    return(
    <div className="header">
        <div className="header-hamburger">
            <img onClick={()=>setVisibleSort(!visibleSort)} src={hamburger} alt=""/>
            {visibleSort && <div className="hamburger__popup">
                      <ul onClick={()=>setVisibleSort(!visibleSort)}>
                        <li className="active"> <NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/shop">Магазин</NavLink></li>
                        <li><NavLink to="/cart">Корзина </NavLink></li>
                        <li><NavLink to="/contacts">Контакты </NavLink></li>
                    </ul>
                </div>}
        </div>
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