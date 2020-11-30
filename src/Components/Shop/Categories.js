import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {setSelectedCategory} from "../../Redux/microgreen-reducer";


export const Categories = React.memo(()=>{
    // React.memo чтобы избежать лишних ререндеров страницы от изменения стейта

    const categories = useSelector(state => state.shopPage.categories);
    // здесь мы получаем список наших категорий с помощью хука
    const SelectedCategory = useSelector(state => state.shopPage.SelectedCategory);
    // здесь мы получаем выбранную категорию из нашего стейта с помощью хука также
    const dispatch = useDispatch();
    // создаем диспатч чтобы дальше вызывать санки

    const onSelectCategoriesType = React.useCallback((type) => {
        dispatch(setSelectedCategory(type));
    }, []);
    // здесь мы прокидываем в стейт нашу выбранную категорию

    return(
        <div className="categories">
            <ul>
                <li className={SelectedCategory === null? "active":""} onClick={()=>onSelectCategoriesType(null)}>Все</li>
                {categories && categories.map((name,index)=>(
                    <li className={SelectedCategory === index? "active":""}
                        onClick={()=>onSelectCategoriesType(index)}
                        key={`${name}_${index}`}>
                        {name}
                    </li>
                ))}

            </ul>
        </div>
    )
})