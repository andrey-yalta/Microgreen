import React from "react"
import {Header} from "../Header/Header";
import {Footer} from "../Home/Footer";
import video from "../../Assets/Img/About/video.jpg"
import logo from "../../Assets/Img/About/logo.png"
import bg1 from "../../Assets/Img/About/bg1.png"
import bg2 from "../../Assets/Img/About/bg2.png"
export  const About = React.memo(()=>{
    return(
        <div>

            <div className="about">
                <h4>Польза <span>Микрозелени</span></h4>
                <div className="about__inform">

                    <div className="about__inform-video">

                        <iframe src="//vk.com/video_ext.php?oid=-162449384&id=456239021&hash=e12a953dbc7c723a&hd=2"
    width="853" height="480" frameBorder="0" allowFullScreen/>
                    </div>
                    <div className="about__inform-photos">
                        <img src={logo} alt=""/>
                    </div>
                </div>
                <h4>Процесс <span>Выращивания</span></h4>
                <div className="about__process">
                    <div>
                        <img src={bg1} alt=""/>
                            <img src={bg2} alt=""/>
                    </div>
                </div>


            </div>

        </div>
    )
})