import React from "react"
import {Header} from "../Header/Header";
import {Footer} from "../Home/Footer";
import curt from "../../Assets/Img/Cart/curt.svg"
import del from "../../Assets/Img/Cart/del.svg"
import {CartItem} from "./CartItem";
import {useDispatch, useSelector} from "react-redux";
import {clearCart, minusCartItem, plusCartItem, removeItem} from "../../Redux/cart-reducer";
import {CartEmpty} from "./CartEmpty";
import {NavLink} from "react-router-dom";

export const Cart =()=>{
    const {totalPrice,totalCount, items} = useSelector(({cartPage})=>cartPage);
    // достаём итоговую цену, итоговое количество и массив с микрозеленью которую добавили
    const dispatch = useDispatch();
    // создаём диспатч чтобы можно было санки прокидывать
    const addedMicrogreen = Object.keys(items).map(key=>{return items[key].items[0]})
    // достаём из обектов добаленные пиццы и склдываем в массив
    const onClearCart =()=>{
        if(window.confirm("Вы действительно хотите очистить корзину?")){
            dispatch(clearCart());}
    }
    const onRemoveItem =(id)=>{
        if(window.confirm("Вы действительно хотите удалить микрозелень?")){
            dispatch(removeItem(id));
        }
    }
    const onPlusItem =(id)=>{
        dispatch(plusCartItem(id));
    }
    const onMinusItem =(id)=>{
        dispatch(minusCartItem(id));
    }
    return(<div>

        {totalCount? <div className="cart">
            <div className="cart__top-line">
                <div><h4><img src={curt} alt=""/> Корзина</h4></div>
                <div  className="cart__clear-button" onClick={onClearCart}><img src={del} alt=""/><span > Очистить корзину</span></div>
            </div>
            <div className="cart__items">
                {addedMicrogreen.map(obj=><CartItem  onMinus={onMinusItem} onPlus={onPlusItem} key={`${obj.id}_${obj.name}`}  id={obj.id} onRemove ={onRemoveItem}  imageUrl={obj.imageUrl}  totalCount ={items[obj.id].items.length} name = {obj.name} type={obj.type} size ={obj.size} totalPrice={items[obj.id].totalPrice}/>)}

            </div>

            <div className="cart__bottom">
                <div className="cart__bottom-details">
                    <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                    <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                </div>
                <div className="cart__bottom-buttons">
                    <div href="/" className="button button--outline button--add go-back-btn">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <NavLink to="/shop">
                            <span>Вернуться назад</span>
                        </NavLink>
                    </div>
                    <div className="button pay-btn">
                        <span>Оплатить сейчас</span>
                    </div>
                </div>
            </div>



        </div>:<CartEmpty/>}


    </div>)
}