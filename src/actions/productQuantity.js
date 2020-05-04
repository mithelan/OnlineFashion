import {INCREASENUMBER,DECREASENUMBER,DELETE_PRODUCTS} from './types';


export const productQuantity = (action,name) =>{

    return(dispatch)=>{
        console.log('Inside product quantity');
        console.log('Action is ', action);
        console.log('Action is ', name);


        dispatch({
            type :action  === "increase" ? INCREASENUMBER :DECREASENUMBER,
            payload: name
        })
    }
}

export const deleteproducts =(name)=>{

    return(dispatch)=>{
        console.log('Inside CLEAR');

        console.log(name);

        dispatch({
            type : DELETE_PRODUCTS,
            payload: name
        })
    }
}
