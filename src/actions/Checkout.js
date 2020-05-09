import { CHECKOUT} from './types';



export const checkout= (productList)=>{
    return (dispatch)=>{
        console.log('Adding to Cart');
        console.log('Product',productList);
        dispatch({
            type:CHECKOUT,
            payload:productList
        });
    }
}
