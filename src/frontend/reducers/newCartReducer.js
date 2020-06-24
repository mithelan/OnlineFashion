import {ADD_TO_NEW_CART,REMOVE_FROM_CART} from "../actions/types";


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

        case REMOVE_FROM_CART:
            return {cartItems: state.cartItems.filter(element=>element.product!=action.payload)}


        default:
            return state
    }
}





export {newCartReducer}
