

import {microgreenAPI} from "../api/api";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_MICROGREEN = "SET_MICROGREEN";
const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
const SET_SELECTED_SORT_BY = "SET_SELECTED_SORT_BY";

let initialState = {
    microgreen:[],
    isFetching:false,
    SelectedCategory:null,
    SelectedSortBy:0,
    categories: ["Бобовые", "Семенные", "Стручковые","Листовые", "Соки"],
    sortsArray:[ { name: 'популярности', type: 'popular', order: 'desc' },
        { name: 'цене', type: 'price', order: 'desc' },
        { name: 'алфавиту', type: 'name', order: 'asc' }]


};

const microgreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case SET_MICROGREEN:
            return {
                ...state,microgreen: action.microgreen,
            }
        case SET_SELECTED_CATEGORY:
            return {
                ...state,SelectedCategory: action.SelectedCategory,
            }
        case SET_SELECTED_SORT_BY:
            return {
                ...state,SelectedSortBy: action.SelectedSortBy,
            }
        default:
            return state;
    }
}
export default microgreenReducer;

export const toggleIsFetching = (isFetching) =>{
    return{type:TOGGLE_IS_FETCHING, isFetching}
}
export const setMicrogreen = (microgreen) =>{
    return {type:SET_MICROGREEN,microgreen}
};
export const setSelectedCategory = (SelectedCategory) =>{
    return {type:SET_SELECTED_CATEGORY,SelectedCategory}
};
export const setSelectedSortBy = (SelectedSortBy) =>{
    return {type:SET_SELECTED_SORT_BY,SelectedSortBy}
};

export const getMicrogreen = (category,SelectedSortBy) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true)); //эта херня нужная чтобы включать и выключать анимацию
        let data = await microgreenAPI.getMicrogreen(category,SelectedSortBy);
        dispatch(toggleIsFetching(false));
        dispatch(setMicrogreen(data));
    }
}