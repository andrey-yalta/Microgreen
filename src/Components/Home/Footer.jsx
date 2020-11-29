import React from "react"
import footerLine from "../../Assets/Img/Home/footer-line.png"
import vk from "../../Assets/Img/Home/footer-vk.png"
import whatsapp from "../../Assets/Img/Home/footer-whatsapp.png"
import inst from "../../Assets/Img/Home/footer-instagram.png"
import viber from "../../Assets/Img/Home/footer-viber.png"
export const Footer = ()=>{
    return(
        <footer>
            <div className="footer__nav">
                <ul>
                    <li><a href="/">Главная</a></li><img src={footerLine} alt=""/>
                    <li><a href="/">О нас</a></li><img src={footerLine} alt=""/>
                    <li><a href="/">Магазин</a></li><img src={footerLine} alt=""/>
                    <li><a href="/">Корзина</a></li><img src={footerLine} alt=""/>
                    <li><a href="/">Контакты</a></li>
                </ul>
            </div>
            <div className="footer__down">
                <div className="footer__down-info">
                    <p><b>Адрес:</b>г. Ялта ул. Бахчисарайское шоссе 2  дом 2</p>
                <p><b>WhatsApp / Viber ::</b> +7 978 050 96 77 - <span>Виталий</span></p>
                <p><b>WhatsApp / Viber ::</b>+7 978 050 96 77 - <span>Ирина</span></p>
            </div>
            <div className="footer__down-social">
                <img src={vk} alt=""/>
                    <img src={whatsapp} alt=""/>
                        <img src={inst} alt=""/>
                            <img src={viber} alt=""/>
            </div>
        </div>
</footer>
    )
}