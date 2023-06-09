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

        case "SET_SORT_VALUE":
            let userSortValue = document.getElementById("sort");
            let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
            return {
                ...state,
                sorting_flowers: sort_value,
            }
        default:
            return state;
    }

};
export default filterReducers;