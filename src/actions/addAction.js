import {ADD_PRODUCT_CART, ADD_TO_CART,ADD_TO_NEW_CART,REMOVE_FROM_CART} from "./types";
import axios from 'axios'
import Cookie from 'js-cookie'





const addtocartnew=(productId,qty)=> async (dispatch,getState)=>{
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

        const {cart:{cartItems}}=getState();
        Cookie.set("cartItems",JSON.stringify(cartItems))

    }catch(error){

    } 
}
const removeFromCart=(productId)=> async (dispatch,getState)=>{

        console.log('Remove an item');
        dispatch({
            type: REMOVE_FROM_CART,
            payload: productId
        })

    const {cart:{cartItems}}=getState();
    Cookie.set("cartItems",JSON.stringify(cartItems))
}



export {addtocartnew,removeFromCart}
