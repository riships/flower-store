import { useReducer, createContext } from "react";
import React from "react";

// initial state
const initialState = {
    cart: {},
};

const Context = createContext({});

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = state.cart[action.payload.id];
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [action.payload.id]: item ? {
                        ...item,
                        qty: item.qty + 1,
                    } : {
                        ...action.payload,
                        qty: 1
                    }
                }
            }
        case "REMOVE_FROM_CART":
            const newState = { ...state.cart };
            delete newState[action.payload.id];
            // console.log("newState", newState);
            return {
                ...state,
                cart: newState
            };
        default:
            return state;

    }
}
//context provider
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer,
        initialState);
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}

export { Context, CartProvider };