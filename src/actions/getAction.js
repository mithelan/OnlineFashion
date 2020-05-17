import axios from 'axios';
import {GET_NUMBERS_CART,GET_CART_TOTAL,PRODUCTS_LOADING} from "./types";

export  const getNumbers=()=>dispatch =>{
    dispatch(setProductsLoading());
    axios.get('/items ')
    .then(res=>
        dispatch({
            type : GET_NUMBERS_CART,
            payload :res.data
        })

    )
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

export  const setProductsLoading=()=>{
    return  {
      type: PRODUCTS_LOADING
    }
}
