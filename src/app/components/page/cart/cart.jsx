import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCart,
    decrementQuantity,
    getCartList,
    getCartListQuantity,
    getCartStatus,
    incrementQuantity,
    removeProductFromCart
} from "../../../store/cart";
import ClearCartButton from "../../common/clearCartButton";
import CartProductsTable from "../../ui/cartProductsTable";

const Cart = () => {
    const dispatch = useDispatch();
    const cartList = useSelector(getCartList());
    const isCartOpen = useSelector(getCartStatus());
    const cartItemsQuantity = useSelector(getCartListQuantity());
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const handleDecrement = (id) => {
        dispatch(decrementQuantity(id));
    };
    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };
    const handleRemove = (id) => {
        dispatch(removeProductFromCart(id));
    };
    return (
        <div
            className={
                "cart-container" +
                (!isCartOpen ? "-hidden" : "") +
                " bg-light border-top"
            }
        >
            <div className="">
                <div className="d-flex justify-content-end px-3 py-1">
                    {cartItemsQuantity > 0 && (
                        <ClearCartButton onClick={handleClearCart} />
                    )}
                </div>
                {cartItemsQuantity !== 0 ? (
                    <CartProductsTable
                        sorting={false}
                        products={cartList}
                        onDecrement={handleDecrement}
                        onIncrement={handleIncrement}
                        onRemove={handleRemove}
                    />
                ) : (
                    <h1 className="text-center">Корзина пуста</h1>
                )}
            </div>
        </div>
    );
};

export default Cart;
