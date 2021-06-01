import React from "react"
import {ShopItem} from "./ShopItem";
import {useDispatch, useSelector} from "react-redux";
import {getMicrogreen} from "../../Redux/microgreen-reducer";
import {_getItemCount, addMicrogreenToCart, getGroupSum} from "../../Redux/cart-reducer";



export const ShopItemContainer = ()=>{
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
        <div className="content__items">
            {microgreen.map((u,index)=><ShopItem AddedMicrogreenItems={microgreenItems[u.id] && AddedMicrogreenItems(u.id)}  handleAppMicrogreen={onMicrogreenAdd} key={index} {...u}/>)}
        </div>
    )
}