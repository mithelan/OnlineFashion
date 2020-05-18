import {ADD_TO_NEW_CART} from "../actions/types";


function newCartReducer(state={cartItems:[]},action) {
    switch (action.type) {
        case ADD_TO_NEW_CART:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if (product) {
                return {
                    cartItems:
                        state.cartItems.map(x => x.product === product.product ? item : x)
                };
            }
            return {cartItems: [...state.cartItems, item]};
        default:
            return state
    }
}

export {newCartReducer}
