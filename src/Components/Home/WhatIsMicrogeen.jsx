import React from "react";
import plan from "../../Assets/Img/Home/two-plan.png"
export const WhatIsMicrogreen =()=>{
    return(
        <div className="second">
            <div className="second-container">
                <div className="second-container__img">
                    <img src={plan} alt=""/>
                </div>
                <div className="second-container__about">
                    <h2>Что такое <span>микрозелень?</span></h2>
                    <p>Это <span>растение</span> от 2-х до 7 дней жизни. В фазе первых дней роста, в нем максимально
                        активированы все резервы нутриентов. Все для того, чтобы растение развивалось быстро и было
                        здоровым. Содержание <span className="green">витаминов</span>, <span
                            className="green">минералов</span> и энзимов в таких
                        «малышах» <span>в 20 раз выше,</span> чем во взрослых растениях. Благодаря их натуральности, наш
                        организм усваивает максимум нутриентов, без побочных эффектов аптечных витаминных комплексов.
                    </p>
                </div>
            </div>
        </div>
    )
}