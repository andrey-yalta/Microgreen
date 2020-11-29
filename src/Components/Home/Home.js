import React from "react";
import s from  "./Home.module.css"
import {First} from "./First";
import {WhatIsMicrogreen} from "./WhatIsMicrogeen";
import {Triggers} from "./Triggers";
import {Header} from "../Header/Header";
import {Products} from "./Products/Products";
import {Slider} from "./Slider";
import {Ordering} from "./Ordering";
import {Form} from "./form";
import {Footer} from "./Footer";
export const Home =()=>{
    return(<div className={s.content}>
        <First/>
        <WhatIsMicrogreen/>
        <Triggers/>
        <Products/>
        <Slider/>
        <Ordering/>
        <Form/>
        <Footer/>

    </div>)
}