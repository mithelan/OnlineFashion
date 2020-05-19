import { combineReducers } from 'redux';

import {newCartReducer} from "../../reducers/newCartReducer";


export default combineReducers({

    cart:newCartReducer,


})
