const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const ADD_MICROGREEN_TO_CART = "ADD_MICROGREEN_TO_CART";
const CLEAR_CART = "CLEAR_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const MINUS_CART_ITEM = "MINUS_CART_ITEM";
const PLUS_CART_ITEM = "PLUS_CART_ITEM";
const GET_ITEM_COUNT = "GET_ITEM_COUNT";


let initialState = {
    items: {},
    totalPrice:0,
    totalCount:0,
    isFetching:false,
};
const getTotalPrice =arr =>arr.reduce((sum,obj)=>obj.price +sum,0);

/////////мои функции
const _getItemSum=(obj)=>{
    return obj.totalPrice;
}

export const _getItemCount=(obj)=>{
    return obj.items.length;
}

export const getGroupSum =(obj, func)=>{
    return Object.values(obj).reduce((sum, obj) => {
        const value = func(obj);

        return sum + value;
    }, 0);
}

// достаём значения, каждое из них отправляем функции подсчета суммы и суммируем что получается
const totalSum = (obj,  func)=> {
    return  Object.values(obj).reduce((sum, obj) => {
        const value = getGroupSum(obj, func);

        return sum + value;
    }, 0);
}

///////мои функции


const _getsum =(obj,path)=>{

    let prices =Object.keys(obj);
    const sums = prices.reduce((total,amount)=>{
        obj[total].totalPrice += obj[amount].totalPrice;

    } )

    return Number(sums);
}

const getTotalSum = (obj, path) => {

    return Object.values(obj).reduce((sum, obj) => {
        const value = _getsum(obj, path);

        return sum + value;
    }, 0);
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case ADD_MICROGREEN_TO_CART:{

            
            // const currentPizzaItems = !state.items[action.pizza.id]
            //     ? [action.pizza]
            //     :[...state.items[action.pizza.id].items  ,action.pizza];
            const newCurrentPizzaItems = !state.items[action.pizza.id]
                ?  [action.pizza]
                :!state.items[action.pizza.id][action.pizza.size]?
                     [ action.pizza]:
                    [...state.items[action.pizza.id][action.pizza.size].items, action.pizza] ;

            // const newCurrentPizzaItems = !state.items.action.pizza ? state.items[action.pizza]:[action.pizza.price]



            const newItems ={
                ...state.items,
                [action.pizza.id]:{
                    ...state.items[action.pizza.id],
                    [action.pizza.size]: {
                    items:newCurrentPizzaItems,
                    totalPrice: getTotalPrice(newCurrentPizzaItems)}

                },
            }
            const totalCount = totalSum(newItems, _getItemCount);

            const totalPrice = totalSum(newItems, _getItemSum);

            return {
                ...state,
                items:newItems,
                totalCount: totalCount,
                totalPrice: totalPrice,

            }
        }
        case CLEAR_CART:{

            return {
                ...state,
                items: {},
                totalPrice:0,
                totalCount:0,
            }}
        case REMOVE_ITEM:{
            debugger;
            const newItems = {...state.items};
            const currentTotalPrice = newItems[action.id][action.size].totalPrice;
            const currentTotalCount = newItems[action.id][action.size].items.length;

            delete newItems[action.id][action.size];
            debugger;
            return {
                ...state,
                items:newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }}

        case 'PLUS_CART_ITEM': {
            debugger;
            const newObjItems = [
                ...state.items[action.id][action.size].items,
                state.items[action.id][action.size].items[0],
            ];
            const newItems = {
                ...state.items[action.id], [action.size]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };
            debugger;


            const obj2 = {...state.items}
            obj2[action.id] = {...state.items[action.id]}
            obj2[action.id][action.size] = {...state.items[action.id][action.size]}
            obj2[action.id] = newItems;
            debugger;
            const totalCount = totalSum(obj2, _getItemCount);
            const totalPrice = totalSum(obj2, _getItemSum);
            debugger;
            return {
                ...state,
                 items:obj2,
                totalCount,
                totalPrice,
            };
        }

        case 'MINUS_CART_ITEM': {
            debugger;
            const oldItems = state.items[action.id][action.size].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.id][action.size].items.slice(1) : oldItems;
            const newItems = {...state.items}
            newItems[action.id] = {
                ...state.items[action.id],
                [action.size]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };
            debugger;
            const totalCount = totalSum(newItems, _getItemCount);
            const totalPrice = totalSum(newItems, _getItemSum);
            debugger;
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        }
        case "GET_ITEM_COUNT":{
            debugger;
            return getGroupSum(state.items[action.id], _getItemCount)
        }

        default:
            return state;
    }
}
export default cartReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const addMicrogreenToCart = (pizza) =>{
    return {type:ADD_MICROGREEN_TO_CART,pizza}
};
export const clearCart = () =>{

    return {type:CLEAR_CART}
};
export const removeItem = (id,size) =>{
    return {type:REMOVE_ITEM,id, size}
};
export const plusCartItem = (id, size) =>{

    return {type:PLUS_CART_ITEM,id, size}
};
export const minusCartItem = (id, size) =>{

    return {type:MINUS_CART_ITEM,id, size}
};

export const getItemCount = (id) =>{

    return {type:GET_ITEM_COUNT,id}
};
