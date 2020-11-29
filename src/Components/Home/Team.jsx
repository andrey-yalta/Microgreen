import React from "react"
import team from "../../Assets/Img/Home/seven-team.png"
export const Team =()=>{
    return(
        <div className="seven">
            <h4> Наша <span> команда</span></h4>
            <div className="seven__container">
                <div className="seven__container-offer">
                    <h4> Наша <span> команда</span></h4>
                    <p>Это <span>растение</span> от 2-х до 7 дней жизни. В фазе первых дней роста, в нем максимально
                        активированы все резервы нутриентов. Все для того, чтобы растение развивалось быстро и было
                        здоровым. Содержание <span className="green">витаминов</span>, <span
                            className="green">минералов</span> и энзимов в таких
                        «малышах» <span>в 20 раз выше,</span> чем во взрослых растениях. Благодаря их натуральности, наш
                        организм усваивает максимум нутриентов, без побочных эффектов аптечных витаминных комплексов.
                    </p>
                </div>
                <div className="seven__container-img">
                    <img src={team} alt=""/>
                </div>
            </div>
        </div>
    )
}