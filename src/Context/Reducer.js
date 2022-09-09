const Reducer = (state, action) => {
    switch(action.type) { 
        case "ADD_TO_CART":
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case "CALCULATE_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }
        case "REMOVE_TOTAL_PRICE":
            return {
                ...state,
                totalPrice: state.totalPrice - action.payload
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                items: state.items.filter(item => item.title !== action.payload)
            }
        default:
            return state
    }
}

export default Reducer;