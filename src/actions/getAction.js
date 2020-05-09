import {GET_NUMBERS_CART,GET_CART_TOTAL} from "./types";

export  const getNumbers=()=>{
    return (dispatch)=> {
        console.log('Getting the Cart');
        dispatch({
            type: GET_NUMBERS_CART
        });
    }
}

export  const getCartTotal=()=>{
    return (dispatch)=> {
        console.log('Getting the CartTotal');
        dispatch({
            type: GET_CART_TOTAL
        });
    }
}


