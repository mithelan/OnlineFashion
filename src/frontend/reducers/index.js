import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import authReducers from "./authReducers";
import {newCartReducer} from "./newCartReducer";

import user from './UserReducer';


export default combineReducers({

    error: errorReducer,
    auth: authReducers,
    cart:newCartReducer,
    user

});
