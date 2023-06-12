import React, { createContext } from "react";

const CartContext = createContext();


const CartProvider = ({ children }) => {
    return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
};

export { CartProvider };