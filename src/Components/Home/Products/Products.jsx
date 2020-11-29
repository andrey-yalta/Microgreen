import React from "react"
import fourItem from "../../../Assets/Img/Home/four-item.jpg"
import fourArrow from "../../../Assets/Img/Home/four-arrow.png"
import firstCartLogo from "../../../Assets/Img/Home/first-cart-logo.svg"
import {ProductItem} from "./ProductItem";
export const Products =()=>{
    return(
        <div className="four">

            <h4>Наша <span>продукция</span></h4>
            <div className="four__items">

                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>




            </div>
            <div className="four__nav">
                <div className="four__nav-button">
                    <a href="/"> <img src={fourArrow} alt=""/></a>
                </div>
                <div className="four__nav-links">
                    <div className="four__nav-link"><a href="/"/></div>
                    <div className="four__nav-link active"><a href="/"/></div>
                    <div className="four__nav-link"><a href="/"/></div>
                    <div className="four__nav-link"><a href="/"/></div>
                    <div className="four__nav-link"><a href="/"/></div>
                </div>
                <div className="four__nav-button ">
                    <a href="/"> <img src={fourArrow} alt=""/></a>
                </div>
            </div>
            <div className="four-button button">

                <span>Перейти в магазин</span>
                <img src={firstCartLogo} alt="go to shop"/>

            </div>
        </div>
    )
}


// import React from "react"
// export const Products =()=>{
//     return(
//         <div></div>
//     )
// }