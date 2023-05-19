const filterReducers = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_flowers: [...action.payload],
                all_flowers: [...action.payload],
            };
        default:
            return state;
    }

};
export default filterReducers;