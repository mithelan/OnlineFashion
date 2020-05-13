import {combineReducers} from "redux";
import cartReducer  from "./cartReducer";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";

export default combineReducers({
    auth: authReducers,
    errors: errorReducers,
    cartState:cartReducer
});
