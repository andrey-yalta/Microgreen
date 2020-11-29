import React from "react"
import map from "../../Assets/Img/Home/six-map.jpg"
export const Ordering =()=>{
    return(
        <div className="six">
            <h4>Наша <span>Доставка</span></h4>
            <div className="six__offer">
                <h4><span>Доставка бесплатна</span></h4>
                <p>по всему городу <span>Ялта</span> При заказе от 200р :</p>
            </div>
            <div className="six__nav">
                <img src={map} alt=""/>
            </div>
            <div className="six__offer">
                <h4><span>Самовывоз:</span></h4>
                <p>Адрес: г. Ялта Бахчисарайское шоссе 2 дом2 </p>
            </div>
        </div>
    )
}