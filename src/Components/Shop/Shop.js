import React from "react"
import {Header} from "../Header/Header";
import {Footer} from "../Home/Footer";
import fourItem from "../../Assets/Img/Home/four-item.jpg"
import {ShopItem} from "./ShopItem";
import {Sort} from "./Sort";
import {Categories} from "./Categories";
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
            <div className="content__items">
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>
                <ShopItem/>



            </div>

            {/*</div>*/}

        </div>
            <Footer/>
        </div>
)
}