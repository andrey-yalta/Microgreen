import React from "react"
import plan from "../../Assets/Img/Home/two-plan.png"
export const Form =()=>{
    return(
        <div className="eight">
            <h4> Остались вопросы? <span>Задавайте!</span></h4>
            <div className="eight__container">
                <div className="eight__container-form">
                    <input type="text" placeholder="Введите имя"/>
                    <input type="text" placeholder="Введите номер телефона"/>
                    <input type="text" placeholder="Введите сообщение или вопрос"/>

                </div>
                <div className="eight__container-img">
                    <img src={plan} alt=""/>
                </div>

            </div>
            <div className="eight__container-buton button">
                Отправить
            </div>
        </div>
    )
}