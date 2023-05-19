import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductFlowers } from "./context/productcontext";

const FilterContext = createContext();
const initialState = {
    filter_flowers: [],
    all_flowers: [],
}

export const FilterContextProvider = ({ children }) => {
    const { flowers } = useProductFlowers();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: "LOAD_FILTER_FLOWERS",
            payload: flowers
        });
    }, [])

    return (
        <FilterContext.Provider value={{ ...state }}>
            {children}
        </FilterContext.Provider>
    );
};
export const useFilterContext = () => {
    return useContext(FilterContext);
}