const FlowerReducers = (state, actions) => {
    switch (actions.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA":
            const flowerType = actions.payload.filter((currEle) => {
                return currEle.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                flowers: actions.payload,
                flowerType: flowerType,

            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };
        case "SET_SINGLE_FLOWER":
            return {
                ...state,
                isSingleLoading: false,
                singleflowers: actions.payload,
            };
        case "API_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };

        default:
            return state;

    };
}

export default FlowerReducers;