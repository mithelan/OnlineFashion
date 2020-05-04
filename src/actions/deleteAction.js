import {DELETE_NUMBERS_CART} from "./types";



export const deletecart= (productName)=>{
    return (dispatch)=>{
        console.log('Deleting to Cart');
        console.log('Product',productName);
        dispatch({
            type:DELETE_NUMBERS_CART,
            payload:productName
        });
    }
}
