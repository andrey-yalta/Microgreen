import React from "react";
import {Header} from "../Header/Header";
export const First =()=>{
    return(
        <div className="first">
            <Header/>
            <div className="first-container">
                <h1>Микрозелень</h1>
                <h2>Здоровое питание <br/>и красота ваших блюд</h2>
                <div className="first-triggers">
                    <h4>Работаем более трёх лет</h4>
                    <h4>Доставляем любую точку города</h4>
                    <h4>Наша зелень всегда свежая</h4>
                    <h4>Выгодные условия для ресторанов</h4>
                </div>
                <div className="first-button button">
                    <a href="/">Перейти в магазин</a>
                </div>
            </div>
        </div>
    )
}