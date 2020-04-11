import {ADD_PRODUCT_CART,GET_NUMBERS_CART} from "../actions/types";

const intialState= {
    cartNumber: 0,
    cartCost: 0,
    products: {
        blackTshirt: {
            name: 'Black Tshirt',
            price: 1150.00,
            numbers: 0,
            inCart: false
        },
        WhiteTshirt: {
            name: 'Black Tshirt',
            price: 1150.00,
            numbers: 0,
            inCart: false
        },
        blueTshirt: {
            name: 'Black Tshirt',
            price: 1150.00,
            numbers: 0,
            inCart: false
        },
        blacklongTshirt: {
            name: 'Black Tshirt',
            price: 1150.00,
            numbers: 0,
            inCart: false
        },
    }
}

export default (state=intialState,action) =>{
    switch (action.type) {

        case ADD_PRODUCT_CART:
            let addItems={...state.products[action.payload]}

            addItems.numbers += 1;
            addItems.inCart=true;
            console.log(addItems);
            return{
                ...state,
                cartNumber: state.cartNumber+1,
                cartCost: state.cartCost + state.products[action.payload].price ,
                products: {
                    ...state.products,
                    [action.payload]:addItems
                }
            }

        case GET_NUMBERS_CART:
            return {
                ...state
            }
        default:
            return state;
    }
}