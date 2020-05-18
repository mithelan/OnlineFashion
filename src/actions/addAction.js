import {ADD_PRODUCT_CART, ADD_TO_CART,ADD_TO_NEW_CART} from "./types";
import axios from 'axios'
import {USER_INFO} from "../compound/Config";
//Earlier add to cart with REDUX ONLY
export const addCart= (productsId)=>{
    return (dispatch)=>{
        console.log('Adding to Cart');
        console.log('Product',productsId);
        dispatch({
            type:ADD_PRODUCT_CART,
            payload:productsId
        });
    }
}


const addtocartnew=(productId,qty)=> async (dispatch)=>{
    try{
        const {data}= await axios.get(`http://localhost:5000/products/get/`+productId)
        console.log('Adding to Cart');
        dispatch({
            type: ADD_TO_NEW_CART, payload: {
                product: data._id,
                title: data.title,
                filename: data.filename,
                price: data.price,
                quantity: data.quantity,
                qty


            }});

    }catch(error){

    }
}

export {addtocartnew}
