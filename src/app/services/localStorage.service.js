const CART = "cart";

export function getAllCartItems() {
    return JSON.parse(localStorage.getItem(CART)) || [];
}

export function setCartItems(data) {
    localStorage.setItem(CART, JSON.stringify(data));
}

export function clearCart() {
    localStorage.removeItem(CART);
}

const localStorageService = {
    getAllCartItems,
    setCartItems,
    clearCart
};
export default localStorageService;
