import React from "react"

const categories = ["Мясные", "Вегетерианские", "Острые","Гриль", "Закрытые"];
export const Categories =()=>{
    const [SelectedCategory, setSelectedCategory] = React.useState(0);
    const onSelectCategoriesType = (type) => {
        setSelectedCategory(type);
    };
    return(
        <div className="categories">
            <ul>
                <li className={SelectedCategory === null? "active":""} onClick={()=>onSelectCategoriesType(null)}>Все</li>

                {categories && categories.map((name,index)=>(
                    <li className={SelectedCategory === index? "active":""}
                        onClick={()=>onSelectCategoriesType(index)}
                        key={`${name}_${index}`}
                    >
                        {name}
                    </li>
                ))}

                {/*{props.items.make(name=><li>{name}</li>)}*/}
                {/*{props.items.map((u, index)=> <li key={`${u}_${index}`} onClick={(index)=>setActiveItem(index)}>{u}</li>)}*/}

            </ul>
        </div>
    )
}