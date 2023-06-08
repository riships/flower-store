import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductFlowers } from "./productcontext";
import reducer from "../reducers/filterReducers";

const FilterContext = createContext();

const initialState = {
    isLoading: false,
    filter_flowers: [],
    all_flowers: [],
    grid_view: null,
}

export const FilterContextProvider = ({ children }) => {

    const { flowers } = useProductFlowers();
    // console.log(flowers);
    const [state, dispatch] = useReducer(reducer, initialState);


    // to set grid in view

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    }

    useEffect(() => {
        dispatch({
            type: "LOAD_FILTER_FLOWERS",
            payload: flowers
        });
    }, [flowers])

    return (
        <FilterContext.Provider value={{ ...state, setGridView }}>
            {children}
        </FilterContext.Provider>
    );
};
export const useFilterContext = () => {
    return useContext(FilterContext);
}