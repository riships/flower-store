import React, { createContext, useReducer, cartReducer, useContext } from "react";

const CartContext = createContext();

// Define the initial state of the cart
const initialState = {
    cartItems: [],
};
// Create the CartProvider component
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Add item to cart
    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <CartContext.Provider value={{ cartItems: state.cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook to access the CartContext
const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };