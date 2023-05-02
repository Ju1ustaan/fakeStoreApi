const initialState = {
    cart: [],

    count: 1 
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GO_CART":
            return { ...state, cart: [...state.cart, action.payload] }
        case "DEL_COUNT":
            return { ...state, count: state.count - 1 }
        case "ADD_COUNT":
            return { ...state, count: state.count + 1 }

        default:
            return state
    }
}