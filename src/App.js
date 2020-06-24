import React, { useEffect, useState, Component } from "react";

import "./App.css";
import Home from "./frontend/compound/Home";
import Homep from "./frontend/compound/Homepage";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//mithi
import ProductDetail from "./frontend/compound/ProductDetail";
import Checkout from "./frontend/compound/Checkout";
import Contactus from "./frontend/compound/Contactus";
import ProductDisplay from "./frontend/compound/ProductDisplay";

//narthi
import CreateProducts from "./frontend/component/stockmanager/create-product.component";
import EditProduct from "./frontend/component/stockmanager/edit-product.component";
import "bootstrap/dist/css/bootstrap.min.css";

import StockMain from "./frontend/component/stockmanager/stock-main-component";
import ManageBrand from "./frontend/component/stockmanager/manage-brand.component";

import Axios from "axios";
import AdminHo from "./frontend/admin/AdminHo";
import RegisterSM from "./frontend/admin/registerStockManager";
import LoginSM from "./frontend/admin/stockmanagerlogin";
import Login from "./frontend/user_login/components/auth/LoginModal";

import RegisterModal from "./frontend/user_login/components/auth/RegisterModal";

import Profile from "./frontend/compound/Profile";


import Cartpage from "./frontend/compound/Cartpage";
import RegisterAdmin from "./frontend/admin/registerAdmin";
import LoginAdmin from "./frontend/admin/adminlogin";

//end of narthi
// if(localStorage.token){
//     setAuthToken(localStorage.token);
// }
class App extends Component {
  state = {
    uname: "",
  };
  dologout() {
    localStorage.clear();

    window.location = "/customerLogin";
  }

  parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    // const base64 = base64Url.replace().replace();
    return JSON.parse(window.atob(base64Url));
  }
  componentWillMount() {
    try {
      if (!localStorage.token) {
        return;
      }
      let payload = this.parseJwt(localStorage.getItem("token"));
      // this.setState( {
      //     // let newUserData = { ...prevState.newUserData };
      //     newUserData :payload.name;
      //
      // });
      this.setState({
        uname: payload.name,
      });

      console.log("THE USER", payload.name, this.state.uname);
    } catch (error) {
      alert("user not logged in");
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Home />
            <Switch>
              <Route exact path="/" component={ProductDisplay} />
              //User
              <Route exact path="/login" component={Login} />
              <Route exact path="/Register" component={RegisterModal} />
              <Route exact path="/Comment" component={Component} />
              <Route exact path="/Profile" component={Profile} />
              <Route path="/managebrand" component={ManageBrand} />
              <Route path="/Cartpage/:id?" component={Cartpage} />
              <Route path="/stockmanager" component={StockMain} />
              <Route path="/addStock" component={CreateProducts} />
              <Route path="/editStock/:id" component={EditProduct} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/addStock" component={CreateProducts} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/products/:productsId" component={ProductDetail} />
              <Route path="/admin" component={AdminHo} />
              <Route path="/registerstockmanager" component={RegisterSM} />
              <Route path="/stockmanagerlogin" component={LoginSM} />
              <Route exact path="/adminregister" component={RegisterAdmin} />
              <Route exact path="/adminlogin" component={LoginAdmin} />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}
export default App;
