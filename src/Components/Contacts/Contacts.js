import React from "react"
import vk from "../../Assets/Img/Contacts/vk.png"
import viber from "../../Assets/Img/Contacts/viber.png"
import whatsapp from "../../Assets/Img/Contacts/whatsapp.png"
export const Contacts = ()=>{
    return(
        <div className="contacts">
            <h4>Наши <span> Контакты</span></h4>

            <div className="contacts__city">
                <h6> г. <span>Ялта</span></h6>
                <p> уг. <span>Бахчисарайское шоссе</span> дом 2</p>
            </div>
            <div className="contacts__info">
                <div className="contacts__info-block">
                    <div className="contact__info-block__name">
                        <h6> Виталий <span> Работа</span></h6>
                        <p>Главный <span>агроном</span></p>
                    </div>
                    <div className="contact__info-block__num">
                        <h6>+ 7 (978) 050 96 77</h6>
                    </div>
                    <div className="contact__info-block__links">
                        <img src={vk} alt=""/>
                            <img src={viber} alt=""/>
                                <img src={whatsapp} alt=""/>
                    </div>
                </div>
                <div className="contacts__info-block">
                    <div className="contact__info-block__name">
                        <h6> Cавина <span> Ирина</span></h6>
                        <p>Отдел <span>продаж</span></p>
                    </div>
                    <div className="contact__info-block__num">
                        <h6>+ 7 (978) 050 96 77</h6>
                    </div>
                    <div className="contact__info-block__links">
                        <img src={vk} alt=""/>
                            <img src={viber} alt=""/>
                                <img src={whatsapp} alt=""/>
                    </div>
                </div>
                <div className="contacts__info-block">
                    <div className="contact__info-block__name">
                        <h6> Наш <span> Viber</span> Канал</h6>
                        <p><span>Свежие</span> новости <br/>
                            о поступлених микрозелени</p>
                    </div>
                    <div className="contact__info-block__num">
                        <h6>@MicogreenYalta</h6>
                    </div>
                    <div className="contact__info-block__link">

                    </div>

                </div>
            </div>

            <div className="contacts__button  button">
                <span>Задать вопрос</span>
            </div>

        </div>
    )
}