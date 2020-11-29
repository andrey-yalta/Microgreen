import React from "react"
import basilik from "../../Assets/Img/shop/basilik-small.jpg";
import plus from "../../Assets/Img/Cart/plus.png";
import minus from "../../Assets/Img/Cart/minus.png";
import close from "../../Assets/Img/Cart/close.png";
export  const CartItem =()=>{
    return(           <div className="cart__item">
        <div className="cart__item-img">
            <img
                className="pizza-block__image"
                src={basilik}
                alt="Pizza"
            />
        </div>
        <div className="cart__item-info">
            <h3>Горчицца</h3>
            <p>200гр.</p>
        </div>
        <div className="cart__item-count">
            <div className="cart__item-button">
                <img src={plus} alt=""/>
            </div>
            <b>2</b>
            <div className="cart__item-button">
                <img src={minus} alt=""/>
            </div>
        </div>
        <div className="cart__item-price">
            <b>770 ₽</b>
        </div>
        <div className="cart__item-remove">
            <div className="cart__item-button">
                <img src={close} alt=""/>
            </div>
        </div>

    </div>)
}