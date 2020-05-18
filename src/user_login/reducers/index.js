import { combineReducers } from 'redux';
import   authReducer from './authReducers';
import  errorReducer from './errorReducer';
import   productList from './productReducers';
import   productdetail from './productDetails';
import   profile from './profile';
import {newCartReducer} from "../../reducers/newCartReducer";

export default combineReducers({

    error: errorReducer,
    auth: authReducer,
    profile,
    cart:newCartReducer,



    prod:productList,
    productdetail:productdetail
})
