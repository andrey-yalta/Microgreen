import React from "react"
import plan from "../../Assets/Img/Home/two-plan.png"
import emailjs from 'emailjs-com';

export const Form =()=>{
    const sendEmail =(e) => {
        // функция для отправки содержания формы на эмейл
        // емейл  andrey_96qx@mail.ru
        e.preventDefault();

        emailjs.sendForm('service_0qrd5yb', 'template_a3kfgkh', e.target, 'user_C57aha0mpvryIUkhEIdNQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return(
        <div className="eight">
            <form onSubmit={sendEmail}>
            <h4> Остались вопросы? <span>Задавайте!</span></h4>
            <div className="eight__container">
                <div className="eight__container-form">
                    <input type="text" name="name" placeholder="Введите имя"/>
                    <input type="text" name="tell" placeholder="Введите номер телефона"/>
                    <input type="text" name="message" placeholder="Введите сообщение или вопрос"/>

                    {/*<input type="email" name="email" placeholder={"Телефон или Email"} />*/}

                    {/*<input type="text" name="password" placeholder={"Пароль"}/>*/}
                </div>
                <div className="eight__container-img">
                    <img src={plan} alt=""/>
                </div>

            </div>
            <button type="submit"  className="eight__container-buton button">
                Отправить
            </button>
            </form>
        </div>
    )
}