// import { combineReducers, compose, createStore } from "redux";
// import { productReducer } from "./reducers/productReducer";

// const combinedReducers = combineReducers({
//   productReducer,
// });

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(combinedReducers, {}, composeEnhancers);

import { combineReducers, compose, createStore } from "redux"; 
import productReducer from "./reducers/productReducer";


 
const combinedReducers = combineReducers({
    productReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combinedReducers, composeEnhancers());

 