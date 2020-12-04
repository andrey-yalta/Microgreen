import React from "react";
import immunity from "../../Assets/Img/Home/three-mmunity.png"
import metabolism from "../../Assets/Img/Home/three-metabolism.png"
import vitamins from "../../Assets/Img/Home/three-vitamins.png"
import healthcare from "../../Assets/Img/Home/three-healthcare.png"
export const Triggers =()=>{
    return(
        <div className="three">
            <h4> Чем полезна <span>Микрозелень?</span></h4>
            <div className="three-container">
            <div className="three-up">

                <div className="three-item item1">
                    <div className="three-item__img">
                        <img src={immunity} alt=""/>
                    </div>
                    <div className="three-item__text">
                        <h6>Повышает <b> <span>иммунитет</span> </b></h6>
                        <p>Обладает целым
                            букетом полезных свойств. Витаминами С Б А.</p>
                    </div>
                </div>

                <div className="three-item item2">
                    <div className="three-item__img">
                        <img src={metabolism} alt=""/>
                    </div>
                    <div className="three-item__text">
                        <h6>Улучшает <b> <span>пищеварение</span> </b></h6>
                        <p>Обладает целым
                            букетом полезных свойств. Витаминами С Б А.</p>
                    </div>
                </div>

                <div className="three-item item3">
                    <div className="three-item__img">
                        <img src={vitamins} alt=""/>
                    </div>
                    <div className="three-item__text">
                        <h6>Дарит запас <b> <span>витаминов</span> </b></h6>
                        <p>Обладает целым
                            букетом полезных свойств. Витаминами С Б А.</p>
                    </div>
                </div>

            </div>
            <div className="three-down">

                <div className="three-item item4">
                    <div className="three-item__img">
                        <img src={healthcare} alt=""/>
                    </div>
                    <div className="three-item__text">
                        <h6>Очищает <b> <span>организм</span> </b></h6>
                        <p>Обладает целым
                            букетом полезных свойств. Витаминами С Б А.</p>
                    </div>
                </div>

                <div className="three-item item5">
                    <div className="three-item__img">
                        <img src={immunity} alt=""/>
                    </div>
                    <div className="three-item__text">
                        <h6>Улучшает <b> <span>пищеварение</span> </b></h6>
                        <p>Обладает целым
                            букетом полезных свойств. Витаминами С Б А.</p>
                    </div>
                </div>

                <div className="three-item item6">
                    <div className="three-item__img">
                        <img src={metabolism} alt=""/>
                    </div>
                    <div className="three-item__text">
                        <h6>Дарит запас <b> <span>витаминов</span></b></h6>
                        <p>Обладает целым
                            букетом полезных свойств. Витаминами С Б А.</p>
                    </div>
                </div>


            </div>
            </div>
        </div>
    )
}