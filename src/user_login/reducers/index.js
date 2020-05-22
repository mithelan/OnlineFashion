import { combineReducers } from 'redux';

import {newCartReducer} from "../../reducers/newCartReducer";
import errorReducer from "../../reducers/errorReducer";
import authReducers from "../../reducers/authReducers";



export default combineReducers({
    error: errorReducer,
    auth: authReducers,
    cart:newCartReducer,


})
