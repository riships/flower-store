import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="Rishi Prakash">
        {children}
    </AppContext.Provider>;

};
// custom Hook 
const useProductFlowers = () => {
    return useContext(AppContext);

};
export { AppProvider, AppContext, useProductFlowers };