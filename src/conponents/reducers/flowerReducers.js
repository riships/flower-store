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
        default:
            return state;

    };
}

export default FlowerReducers;