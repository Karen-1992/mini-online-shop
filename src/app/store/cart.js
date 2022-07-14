import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: localStorageService.getAllCartItems(),
        cartQuantity: localStorageService.getAllCartItems().length,
        isVisible: false
    },
    reducers: {
        cartProductAdded: (state, action) => {
            const index = state.entities.findIndex(
                (p) => p.ID === action.payload.ID
            );
            if (index !== -1) {
                state.entities[index].quantity += 1;
            } else {
                state.entities.push(action.payload);
                state.cartQuantity += 1;
            }
            if (state.cartQuantity === 1) {
                state.isVisible = true;
            }
            localStorageService.setCartItems(state.entities);
        },
        cartProductRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (p) => p.ID !== action.payload
            );
            state.cartQuantity -= 1;
            if (state.cartQuantity === 0) {
                state.isVisible = false;
            }
            localStorageService.setCartItems(state.entities);
        },
        cartProductDecremented: (state, action) => {
            const index = state.entities.findIndex(
                (p) => p.ID === action.payload
            );
            if (state.entities[index].quantity === 1) return;
            state.entities[index].quantity -= 1;
            localStorageService.setCartItems(state.entities);
        },
        cartProductIncremented: (state, action) => {
            const index = state.entities.findIndex(
                (p) => p.ID === action.payload
            );
            state.entities[index].quantity += 1;
            localStorageService.setCartItems(state.entities);
        },
        cartToggled: (state) => {
            state.isVisible = !state.isVisible;
        },
        cartCleared: (state) => {
            state.entities = [];
            state.cartQuantity = 0;
            state.isVisible = false;
        }
    }
});

const { reducer: cartReducer, actions } = cartSlice;
const {
    cartProductAdded,
    cartProductRemoved,
    cartProductIncremented,
    cartProductDecremented,
    cartToggled,
    cartCleared
} = actions;

export const addProductToCart = (item) => (dispatch) => {
    dispatch(cartProductAdded(item));
};
export const removeProductFromCart = (id) => (dispatch) => {
    dispatch(cartProductRemoved(id));
};

export const toggleCart = () => (dispatch) => {
    dispatch(cartToggled());
};
export const decrementQuantity = (id) => (dispatch) => {
    dispatch(cartProductDecremented(id));
};
export const incrementQuantity = (id) => (dispatch) => {
    dispatch(cartProductIncremented(id));
};

export const clearCart = () => (dispatch) => {
    dispatch(cartCleared());
    localStorageService.clearCart();
};

export const getCartList = () => (state) => state.cart.entities;
export const getCartStatus = () => (state) => state.cart.isVisible;
export const getCartListQuantity = () => (state) => state.cart.cartQuantity;
export const getCartListAmountPrice = () => (state) => {
    let amount = 0;
    for (const item of state.cart.entities) {
        amount += +item.PRICE * item.quantity;
    }
    return amount;
};

export default cartReducer;
