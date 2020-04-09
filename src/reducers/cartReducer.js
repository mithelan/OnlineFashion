import {ADD_PRODUCT_CART,GET_NUMBERS_CART} from "../actions/types";

const intialState={
    cartNumber:0
}

export default (state=intialState,action) =>{
    switch (action.type) {

        case ADD_PRODUCT_CART:
            return{
                cartNumber: state.cartNumber+1
            }

        case GET_NUMBERS_CART:
            return {
                ...state
            }
        default:
            return state;
    }
}