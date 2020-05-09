import {ADD_PRODUCT_CART, GET_NUMBERS_CART, DECREASENUMBER, INCREASENUMBER,DELETE_PRODUCTS,GET_CART_TOTAL} from "../actions/types";

const intialState = {
    cartNumber: 0,
    cartCost: 0,
    products: {
        blackTshirt: {
            name: 'Black Tshirt',
            referenceName:'blackTshirt',
            price: 1150.00,
            numbers: 0,
            inCart: false
        },
        WhiteTshirt: {
            name: 'Black Tshirt',
            referenceName:'WhiteTshirt',
            price: 1150.00,
            numbers: 0,
            inCart: false
        },
        blueTshirt: {
            name: 'Black Tshirt',
            referenceName:'blueTshirt',
            price: 1150.00,
            numbers: 0,
            inCart: false
        },
        blacklongTshirt: {
            name: 'Black Tshirt',
            referenceName:'blacklongTshirt',
            price: 1150.00,
            numbers: 0,
            inCart: false
        },
    }
};

export default (state = intialState, action) => {

    let selecteditem = "";
    switch (action.type) {

        case ADD_PRODUCT_CART:
            selecteditem = {...state.products[action.payload]};

            selecteditem.numbers += 1;
            selecteditem.inCart = true;
            console.log(selecteditem);
            return {
                ...state,
                cartNumber: state.cartNumber + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: selecteditem
                }
            }

        case GET_NUMBERS_CART:
            return {
                ...state
            };

        case GET_CART_TOTAL:
            return{
                ...state
            };

        case INCREASENUMBER:
            selecteditem = {...state.products[action.payload]}
            selecteditem.numbers += 1;

            return {
                ...state,
                cartCost: state.cartCost + state.products[action.payload].price,
                cartNumber: state.cartNumber + 1,
                 products: {
                    ...state.products,
                    //That particular tshirt ex black
                    [action.payload]: selecteditem
                }
            }



        case DECREASENUMBER:
            selecteditem = {...state.products[action.payload]};

            let newCartCost=0;
            if(selecteditem.numbers==0){
                selecteditem.numbers=0;
                newCartCost= state.cartCost
            }else{
                selecteditem.numbers -=1;
                newCartCost= state.cartCost - state.products[action.payload].price
            }
            return {
                ...state,
                cartCost: newCartCost,
                cartNumber: state.cartNumber -1,
                products: {
                    ...state.products,
                    //That particular tshirt ex black
                    [action.payload]: selecteditem
                }

            }

        case DELETE_PRODUCTS:
            selecteditem = {...state.products[action.payload]};
            let productNumbersBackup= selecteditem.numbers;
            selecteditem.numbers=0;
                selecteditem.inCart=false
            return {
                ...state,
                cartNumber: state.cartNumber -productNumbersBackup,
                cartCost: state.cartCost - (productNumbersBackup * selecteditem.price),

                products: {
                    ...state.products,
                    [action.payload]: selecteditem
                }

            }


        default:
            return state;
    }
}
