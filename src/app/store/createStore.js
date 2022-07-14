import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import cartReducer from "./cart";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
