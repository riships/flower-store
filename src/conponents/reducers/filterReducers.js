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
            return {
                ...state,
                sorting_flowers: action.payload,
            };
        case "SORTING_FLOWERS":
            let newSortData = [...state.filter_flowers];

            if (state.sorting_flowers === 'a to z') {
                newSortData.sort((a, b) => a.name.localeCompare(b.name));
            };
            if (state.sorting_flowers === 'z to a') {
                newSortData.sort((a, b) => b.name.localeCompare(a.name));
            };
            if (state.sorting_flowers === 'highest') {
                const sortingFlowers = (a, b) => {
                    return b.price - a.price
                };
                newSortData.sort(sortingFlowers);
            };
            if (state.sorting_flowers === 'lowest') {
                const sortingFlowers = (a, b) => {
                    return a.price - b.price
                };
                newSortData.sort(sortingFlowers);
            };

            return {
                ...state,
                filter_flowers: newSortData,
            };
        case "UPDATE_FILTER_VALUES":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }

            };
        case "FILTERED_FLOWERS":
            let { all_flowers } = state;
            let tempFilterFlower = [...all_flowers]

            const { text } = state.filters;

            if (text) {
                tempFilterFlower = tempFilterFlower.filter((curElm) => {
                    return curElm.name.toLowerCase().includes(text);
                })
            }

            return {
                ...state,
                filter_flowers: tempFilterFlower,
            };
        default:
            return state;
    }

};
export default filterReducers;