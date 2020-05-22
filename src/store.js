import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie'
import rootReducer from './user_login/reducers';


const cartItems=Cookie.getJSON('cartItems') || [];
const userInfo=Cookie.getJSON('userInfo') || null;


const initialState = {cart:{cartItems},userSignIn:{userInfo}};

const middleWare = [thunk];

//const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
