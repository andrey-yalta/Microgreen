import React from "react";
import curt from "../../Assets/Img/Cart/curt.svg"
import del from "../../Assets/Img/Cart/del.svg"
import {useSelector} from "react-redux";
export const Order =()=>{
    const {totalPrice,totalCount, items} = useSelector(({cartPage})=>cartPage);
    const addedMicrogreen1 = Object.keys(items).map(key=>{return items[key]});
    const addedMicrogreen2 = addedMicrogreen1.map( u=> Object.keys(u).map(key=>{return u[key].items[0]}));

    let z = [];
    addedMicrogreen2.forEach((u)=>{
        u.forEach((x)=>{
            z.push(x)
        })
    })
    return(

        <div className="order">

            <div className="order__top-line">
                <div><h4><img src={curt} alt=""/> Корзина</h4></div>
                <div className="order__top-line-clear"><img src={curt} alt=""/><span> Очистить корзину</span></div>
            </div>

            <div className="order__content">
                <div className="order__content-form">
                    <input type="text" placeholder="Введите имя"/>
                        <input type="text" placeholder="Номер телефона"/>
                            <input type="text" placeholder="Выберите город"/>
                                <input type="text" placeholder="Введите улицу"/>
                                    <input type="text" placeholder="Номер дома, квартиры"/>
                                        <input type="text" placeholder="Дополнительные сведения"/>
                </div>

                <div className="order__content-order">
                    <h4> Ваш Заказ: </h4>
                    <div className="order__content-order-stuff">
                        {/*<span>Горчицца <b>200гр </b> 2 шт</span>*/}
                        {/*<span>Горчицца <b>200гр </b> 2 шт</span>*/}
                        {/*<span>Горчицца <b>200гр </b> 2 шт</span>*/}
                        {z.map(u=> <span> {u.name} <b>{u.size} гр.</b>  {items[u.id][u.size].items.length} шт. <br/></span>)}
                    </div>
                    <span>Всего контейнеров: <b2>{totalCount} шт.</b2></span>
                    <span className="order__content-order-summ">Сумма заказа: <b>{totalPrice} руб.</b></span>
                </div>
            </div>

            <div className="order__bottom">
                <div className="order__bottom-buttons">
                    <div  className="button button--outline button--add go-back-btn">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <span>Вернуться назад</span>
                    </div>
                    <div className="button pay-btn">
                        <span>Оплатить сейчас</span>
                    </div>
                </div>
            </div>

        </div>

    )
}