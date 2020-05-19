import { combineReducers } from 'redux';

import {newCartReducer} from "../../reducers/newCartReducer";
import {userSigninReducer} from "./UserReducers";

export default combineReducers({


    cart:newCartReducer,
    userSignIn:userSigninReducer,

})
