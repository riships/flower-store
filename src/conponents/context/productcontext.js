import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/flowerReducers"

const AppContext = createContext();
const API = "http://localhost:3001/flowers";
const intitalState = {
    isLoading: false,
    isError: false,
    flowers: [],
    flowerType: [],
    isSingleLoading: false,
    singleflowers: {},
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, intitalState);
    const getFlowers = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const flowers = await res.data;
            // console.log(flowers);
            dispatch({ type: "SET_API_DATA", payload: flowers });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };
    // my single flower image
    const getSingleFlower = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleflowers = await res.data;
            dispatch({ type: "SET_SINGLE_FLOWER", payload: singleflowers });

        } catch (error) {
            dispatch({ type: "API_SINGLE_ERROR" });

        }
    }

    useEffect(() => {
        getFlowers(API);
    }, []);
    return (
        <AppContext.Provider value={{ ...state, getSingleFlower }}>
            {children}
        </AppContext.Provider>
    );

};
// custom Hook 
const useProductFlowers = () => {
    return useContext(AppContext);

};
export { AppProvider, AppContext, useProductFlowers };