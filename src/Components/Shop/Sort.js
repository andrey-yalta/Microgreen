import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedSortBy} from "../../Redux/microgreen-reducer";


export const Sort = React.memo(()=>{

    const sortsArray = useSelector(state => state.shopPage.sortsArray);
    // прокидываем массив с сортировками с помощью хука
    const SelectedSortBy = useSelector(state => state.shopPage.SelectedSortBy);
    // здесь мы получаем выбранную сортировку из нашего стейта с помощью хука также
    const dispatch = useDispatch();
    // создаем диспатч чтобы дальше вызывать санки
    const activeLabel = sortsArray[SelectedSortBy].name;
    // здесь чисто переменная чтобы мы выводили сортировку по умолчанию = 0

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSelectedSortBy(type));
        setVisibleSort(false);
        setActiveItem(type);
    }, []);
    // здесь по клику вызываем санку и устанавливаем тип сортировки в стейте

    const [visibleSort, setVisibleSort] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState(0);
    // это уже локальный стейт для отображегия активного(выбранного) элемента сортировки и видимости/невидимости списка



    return(            <div className="sort">
        <div className="sort__label">
            <svg
                className={visibleSort ? "rotated":""}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                />
            </svg>
            <b>Сортировка по:</b>
            <span onClick={()=>setVisibleSort(!visibleSort)}>{activeLabel}</span>
        </div>
        {visibleSort && <div  className="sort__popup">
            <ul  >
                {sortsArray && sortsArray.map((name,index)=>(
                    <li className={activeItem === index? "active":""}
                        onClick={()=>onSelectSortType(index)}
                        key={`${name}_${index}`}
                    >
                        {name.name}
                    </li>
                ))}
            </ul>
        </div>}


    </div>)
})