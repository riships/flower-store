import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/flowerReducers"

const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const intitalState = {
    isLoading: false,
    isError: false,
    flowers: [],
    flowerType: [],
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
    useEffect(() => {
        getFlowers(API);
    }, []);
    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );

};
// custom Hook 
const useProductFlowers = () => {
    return useContext(AppContext);

};
export { AppProvider, AppContext, useProductFlowers };