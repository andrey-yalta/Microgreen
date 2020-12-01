import React from "react"
import image1 from "../../Assets/Img/Home/five-image1.jpg"
import image2 from "../../Assets/Img/Home/five-image2.jpg"
import image3 from "../../Assets/Img/Home/five-image3.jpg"
import image4 from "../../Assets/Img/Home/five-image4.jpg"
import image5 from "../../Assets/Img/Home/five-image5.jpg"



// let box = document.querySelector(".box");
// window.onmousemove = function(e) {
//     let x = e.clientX /3;
//     box.style.transform = "perspective(1000px) rotateY("+ x +"deg)";
// }


const boxRef = React.createRef();

export const Slider =()=>{
    const ChangeStyle=(e)=>{
        // debugger;
        let x = e.clientX;
        boxRef.current.style.transform = "perspective(1000px) rotateY("+ x +"deg)";
    }
    return(
        <div className="five">
            <h4>Примеры блюд с <span>Миерозеленью</span></h4>

            <div className="box" ref={boxRef} onMouseMove={ChangeStyle} >
                <span  style={{"--i":"1"}} ><img src={image1} alt=""/></span>
                <span  style={{"--i":"2"}} ><img src={image2} alt=""/></span>
                <span  style={{"--i":"3"}} ><img src={image3} alt=""/></span>
                <span  style={{"--i":"4"}} ><img src={image4} alt=""/></span>
                <span  style={{"--i":"5"}} ><img src={image5} alt=""/></span>
                <span  style={{"--i":"6"}} ><img src={image1} alt=""/></span>
                <span  style={{"--i":"7"}} ><img src={image2} alt=""/></span>
                <span  style={{"--i":"8"}} ><img src={image3} alt=""/></span>

                {/*<span style="--i:1"><img src={image1}></span>*/}
                {/*<span style="--i:2"><img src={image2}></span>*/}
                {/*<span style="--i:3"><img src={image3}></span>*/}
                {/*<span style="--i:4"><img src={image4}></span>*/}
                {/*<span style="--i:5"><img src={image5}></span>*/}
                {/*<span style="--i:6"><img src={image1}></span>*/}
                {/*<span style="--i:7"><img src={image2}></span>*/}
                {/*<span style="--i:8"><img src={image3}></span>*/}
            </div>

        </div>
    )
}