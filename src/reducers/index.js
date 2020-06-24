import {combineReducers} from "redux";
import errorReducer from "../frontend/reducers/errorReducer";
import authReducers from "../frontend/reducers/authReducers";
import {newCartReducer} from "../frontend/reducers/newCartReducer";

import user from '../frontend/reducers/UserReducer';


export default combineReducers({

    error: errorReducer,
    auth: authReducers,
    cart:newCartReducer,
    user

});
