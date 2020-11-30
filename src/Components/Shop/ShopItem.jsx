import React from "react"
import classNames from "classnames"

export const ShopItem =({imageUrl,name,types,price})=>{
    const availablePrice = [100,200]
    const[activePrice,setActivePrice] = React.useState(types[0])
    const onSelectPrice = (index)=>{
        setActivePrice(index);
    }
    return(
        <div className="content__item">
            <div className="content__item-contaier">
                <img src={imageUrl} alt="gorchiza"/>
                <h6>{name}</h6>
                <div className="content__item-buttons">
                    {availablePrice.map((u, index)=>
                        <div  key={index} onClick={()=>onSelectPrice(index)} className={classNames(
                            {"content__item-button":true ,"active":activePrice ===index, "disabled": !types.includes(index)}
                            )}>{u} гр.</div>
                    )}



                    {/*    <div className="content__item-button">100 гр.</div>*/}
                    {/*<div className="content__item-button active">200 гр.</div>*/}
                </div>
            </div>
            <div className="content__item-footer">
                <div className="content__item-footer-salary">{price} ₽.</div>
                <div className="content__item-footer__button">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#AF2060"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )
}