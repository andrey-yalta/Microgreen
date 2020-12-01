import React from "react"
import basilik from "../../Assets/Img/shop/basilik-small.jpg";
import plus from "../../Assets/Img/Cart/plus.png";
import minus from "../../Assets/Img/Cart/minus.png";
import close from "../../Assets/Img/Cart/close.png";
export  const CartItem =(props)=>{
    const handleOnRemoveClick=()=>{
        props.onRemove(props.id)
    }
    const handleOnPlusItemClick =()=>{
        props.onPlus(props.id)
    }
    const handleOnMinusItemClick =()=>{
        props.onMinus(props.id)
    }

    return(           <div className="cart__item">
        <div className="cart__item-img">
            <img
                className="pizza-block__image"
                src={props.imageUrl}
                alt={props.name}
            />
        </div>
        <div className="cart__item-info">
            <h3>{props.name}</h3>
            <p> {props.size} гр.</p>
        </div>
        <div className="cart__item-count">
            <div className="cart__item-button" onClick={handleOnPlusItemClick}>
                <img src={plus} alt=""/>
            </div>
            <b>{props.totalCount}</b>
            <div className="cart__item-button" onClick={handleOnMinusItemClick} >
                <img src={minus} alt=""/>
            </div>
        </div>
        <div className="cart__item-price">
            <b>{props.totalPrice} ₽</b>
        </div>
        <div className="cart__item-remove">
            <div className="cart__item-button" onClick={handleOnRemoveClick} >
                <img src={close} alt=""/>
            </div>
        </div>

    </div>)
}