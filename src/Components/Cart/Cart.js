import React from "react"
import {Header} from "../Header/Header";
import {Footer} from "../Home/Footer";
import curt from "../../Assets/Img/Cart/curt.svg"
import del from "../../Assets/Img/Cart/del.svg"
import {CartItem} from "./CartItem";

export const Cart =()=>{
    return(<div>
        <Header/>
        <div className="cart">
            <div className="cart__top-line">
                <div><h4><img src={curt} alt=""/> Корзина</h4></div>
                <div><img src={del} alt=""/><span> Очистить корзину</span></div>
            </div>
            <div className="cart__items">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        </div>
        <Footer/>

    </div>)
}