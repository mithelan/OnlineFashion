import {ADD_PRODUCT_CART, ADD_TO_CART} from "./types";
import axios from 'axios'
import {USER_INFO} from "../compound/Config";
//Earlier add to cart with REDUX ONLY
export const addCart= (productName)=>{
    return (dispatch)=>{
        console.log('Adding to Cart');
        console.log('Product',productName);
        dispatch({
            type:ADD_PRODUCT_CART,
            payload:productName
        });
    }
}

//ADD TO CART WITH MONGO
export const addToCart= (_id)=> {

    const request = axios.get(`${USER_INFO}/addToCart?productId=${_id}`)

        .then(response => response.data);

    return {
        type: ADD_TO_CART,
        payload: request
    }
}
