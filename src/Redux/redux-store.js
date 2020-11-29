import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import thunkMiddleware from "redux-thunk";

import pizzaReducer from "./microgreen-reducer";
import microgreenReducer from "./microgreen-reducer";
// import cartReducer from "./cart-reducer";


let reducers = combineReducers({
    shopPage:microgreenReducer,
    // cartPage:cartReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;