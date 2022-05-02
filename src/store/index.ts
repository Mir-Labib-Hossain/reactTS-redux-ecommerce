import { combineReducers, compose, createStore } from "redux"; 
import {productReducer,selectedProductReducer} from "./reducers/productReducer";
 
const combinedReducers = combineReducers({
    productReducer,
    selectedProductReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(combinedReducers, composeEnhancers());

 