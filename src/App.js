import React, { useEffect, useState } from "react";
import Cart from "./compound/Cart";
import "./App.css";
import Home from "./compound/Home";
import Homep from "./compound/Homepage";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//mithi
import ProductDetail from "./compound/ProductDetail";
import Checkout from "./compound/Checkout";
import Contactus from "./compound/Contactus";
import ProductDisplay from "./compound/ProductDisplay";
//narthi
import CreateProducts from "./component/stockmanager/create-product.component";
import EditProduct from "./component/stockmanager/edit-product.component";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeStock from "./component/stockmanager/homeStock";

import Axios from "axios";
import AdminHo from "./admin/AdminHo";
import RegisterSM from "./admin/registerStockManager";
import LoginSM from "./admin/stockmanagerlogin";
import LoginModal  from "./user_login/components/auth/LoginModal";
import RegisterModal from "./user_login/components/auth/RegisterModal";
import {loadUser} from "./user_login/actions/authAction";
import setAuthToken from "./middleware/setAuthToken";


import Cartpage from "./compound/Cartpage";

//end of narthi
if(localStorage.token){
    setAuthToken(localStorage.token);
}
export default function App() {

useEffect(()=>{
    store.dispatch(loadUser());
})

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>

            <Home />
            <Switch>
              <Route exact path="/" component={ProductDisplay} />


              //User

              <Route exact path="/login" component={LoginModal} />
              <Route exact path="/register" component={RegisterModal} />


              //Cart
                <Route path="/Cartpage/:id?" component={Cartpage} />

              <Route path="/stockmanager" component={HomeStock} />
              <Route path="/addStock" component={CreateProducts} />
              <Route path="/editStock/:id" component={EditProduct} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/addStock" component={CreateProducts} />
              <Route path="/cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/products/:productsId" component={ProductDetail} />
              <Route path="/admin" component={AdminHo} />
              <Route path="/registerstockmanager" component={RegisterSM} />
              <Route path="/stockmanagerlogin" component={LoginSM} />
            </Switch>

        </BrowserRouter>
      </div>
    </Provider>
  );
}
