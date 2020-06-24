import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import rootReducer from "./frontend/user_login/reducers";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems }, userSignIn: { userInfo } };

const middleWare = [thunk];

//const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(
  rootReducer,
  initialState,
    composeWithDevTools(applyMiddleware(...middleWare))


);

export default store;
