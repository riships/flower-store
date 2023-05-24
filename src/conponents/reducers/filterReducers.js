const filterReducers = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_FLOWERS":
            return {
                ...state,
                filter_flowers: [...action.payload],
                all_flowers: [...action.payload],
            };
        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };
        default:
            return state;
    }

};
export default filterReducers;