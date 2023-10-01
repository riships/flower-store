import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useProductFlowers } from "./productcontext";
import reducer from "../reducers/filterReducers";

const FilterContext = createContext();

const initialState = {
    isLoading: false,
    filter_flowers: [],
    all_flowers: [],
    grid_view: null,
    sorting_flowers: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all"
    },
};

export const FilterContextProvider = ({ children }) => {

    const { flowers } = useProductFlowers();
    // console.log(flowers);
    const [state, dispatch] = useReducer(reducer, initialState);

    // to set grid in view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" })
    };
    // sorting function
    const sorting = (selectedValue) => {
        dispatch({
            type: "SET_SORT_VALUE",
            payload: selectedValue
        });
    };
    // update the filter value
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTER_VALUES", payload: { name, value } })
    };



    useEffect(() => {
        dispatch({
            type: "FILTERED_FLOWERS"
        })
        dispatch({
            type: "SORTING_FLOWERS",
            payload: flowers
        })
    }, [state.sorting_flowers, flowers, state.filters])


    useEffect(() => {
        dispatch({
            type: "LOAD_FILTER_FLOWERS",
            payload: flowers
        });
    }, [flowers])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, sorting, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    );
};
export const useFilterContext = () => {
    return useContext(FilterContext);
}