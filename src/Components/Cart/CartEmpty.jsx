import React from "react"
import empty from "../../Assets/Img/Cart/curt.png"
import {NavLink} from "react-router-dom";

export const CartEmpty =()=>{

    return(
        <div className="content-empty">



            <div className="content__items">

                <div className="content__empty">
                    <h4> Корзина пустая 😕</h4>
                    <p>
                        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную
                        страницу.
                    </p>
                    <img src={empty} alt=""/>

                        <NavLink to="/shop">
                        <div className="cart__empty-button"> Вернуться назад</div>
                        </NavLink>
                </div>


            </div>

        </div>)
}