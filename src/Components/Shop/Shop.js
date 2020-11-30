import React from "react"
import {Header} from "../Header/Header";
import {Footer} from "../Home/Footer";
import {Sort} from "./Sort";
import {Categories} from "./Categories";
import {ShopItemContainer} from "./ShopItemContainer";



export const Shop = ()=>{
    return(
        <div>
            <Header/>
        <div className="content">
            <div className="content__top">
                <Categories/>
            <Sort/>
            </div>
            <div className="content__title">
                <h4>Все проростки</h4>
            </div>
            <ShopItemContainer/>
        </div>
            <Footer/>
        </div>
)
}