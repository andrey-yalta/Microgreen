import React from "react"
import fourItem from "../../../Assets/Img/Home/four-item.jpg"
import fourArrow from "../../../Assets/Img/Home/four-arrow.png"
import firstCartLogo from "../../../Assets/Img/Home/first-cart-logo.svg"
import {ProductItem} from "./ProductItem";
import Carousel from 'react-elastic-carousel';
import {useDispatch, useSelector} from "react-redux";
import {getMicrogreen} from "../../../Redux/microgreen-reducer";
import {_getItemCount, addMicrogreenToCart, getGroupSum} from "../../../Redux/cart-reducer";
import {ShopItem} from "../../Shop/ShopItem";
import {NavLink} from "react-router-dom";

export const Products =()=>{
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const dispatch = useDispatch();
    // создаем диспатч чтобы дальше вызывать санки
    const SelectedSortBy = useSelector(state => state.shopPage.SelectedSortBy);
    // здесь мы получаем выбранную сортировку из нашего стейта с помощью хука также
    const SelectedCategory = useSelector(state => state.shopPage.SelectedCategory);
    // здесь мы получаем выбранную категорию из нашего стейта с помощью хука также
    const microgreen = useSelector(state => state.shopPage.microgreen);
    // получение собственно массива микрозелени
    const sortsArray = useSelector(state => state.shopPage.sortsArray);
    // сомнительный момент, надо будет пересмотреть код - вообще это нужно будет чтобы получить значение массива по индексу и задиспатчить в апи
    const isFetching = useSelector(state => state.shopPage.isFetching);
    // это для прелоадера

    React.useEffect(()=>{
        dispatch(getMicrogreen(SelectedCategory,sortsArray[SelectedSortBy]));
    },[SelectedCategory,SelectedSortBy])
    // это уже короче методы жизненного цикла - получение массива с микрозеденью

    const microgreenItems = useSelector(state => state.cartPage.items);

    const onMicrogreenAdd=(obj)=>{
        //короче это метод чтобы добавлять в корзину
        dispatch(addMicrogreenToCart(obj));
    }
    const AddedMicrogreenItems = (id)=>{
        return  getGroupSum(microgreenItems[id], _getItemCount)
    }

    return(
        <div className="four">

            <h4>Наша <span>продукция</span></h4>
                <Carousel className="four__items" breakPoints={breakPoints}>
                    {microgreen.map((u,index)=><ProductItem AddedMicrogreenItems={microgreenItems[u.id] && AddedMicrogreenItems(u.id)}  handleAppMicrogreen={onMicrogreenAdd} key={index} {...u}/>)}

                </Carousel>

            <div className="four-button button">

                <NavLink to="/shop"><span>Перейти в магазин</span></NavLink>
                <img src={firstCartLogo} alt="go to shop"/>

            </div>
        </div>
    )
}
