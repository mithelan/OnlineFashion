import { combineReducers } from 'redux';
import   authReducer from './authReducers';
import  errorReducer from './errorReducer';

export default combineReducers({

    error: errorReducer,
    auth: authReducer
})