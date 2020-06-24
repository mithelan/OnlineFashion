import {ADD_ME_CART, ADD_TO_CART,ADD_TO_NEW_CART,REMOVE_FROM_CART} from "./types";
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



const addcart=(_id)=> {

   const request=axios.post(`http://localhost:5000/api/auth/addToCart/`+_id

       ,"",{

       headers:{
               "x-auth-token":localStorage.getItem("token"),
               'Accept':'application/json',
               'Content-Type':'application/json'
           }

       }
       )
   return{
       type:ADD_ME_CART,
       payload:request
   }



}

const getCart=(cartItems,userCart)=>{

    const request=axios.get(`http://localhost:5000/product/products_by_id?id=${cartItems}&type=array`

        ,"",{

            headers:{
                "x-auth-token":localStorage.getItem("token"),
                'Accept':'application/json',
                'Content-Type':'application/json'
            }

        }


    )

    return{
        type:ADD_ME_CART,
        payload:request
    }



}



export const tokenConfig = getState => {

    // get token from local storage

    const token = getState().auth.token;

    //Headers

    const config = {
        headers: {
            "x-auth-token":localStorage.getItem("token"),
            "Content-type": "application/json"
        }
    }

    // If token , add to headers

    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;

}



export {addtocartnew,removeFromCart,addcart,getCart}
