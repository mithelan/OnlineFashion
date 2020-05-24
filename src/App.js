import React, { useEffect, useState, Component } from "react";

import "./App.css";
import Home from "./compound/Home";
import Homep from "./compound/Homepage";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//mithi
import ProductDetail from "./compound/ProductDetail";
import Checkout from "./compound/Checkout";
import Contactus from "./compound/Contactus";
import ProductDisplay from "./compound/ProductDisplay";
import NewCartPage from "./compound/NewCartPage";
//narthi
import CreateProducts from "./component/stockmanager/create-product.component";
import EditProduct from "./component/stockmanager/edit-product.component";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeStock from "./component/stockmanager/homeStock";
import StockMain from "./component/stockmanager/stock-main-component";
import ManageBrand from "./component/stockmanager/manage-brand.component";

import Axios from "axios";
import AdminHo from "./admin/AdminHo";
import RegisterSM from "./admin/registerStockManager";
import LoginSM from "./admin/stockmanagerlogin";
import Login from "./user_login/components/auth/LoginModal";

import RegisterModal from "./user_login/components/auth/RegisterModal";
import Comment from "./compound/Comment";
import Profile from "./compound/Profile";
import setAuthToken from "./middleware/setAuthToken";

import Cartpage from "./compound/Cartpage";
import RegisterAdmin from "./admin/registerAdmin";
import LoginAdmin from "./admin/adminlogin";

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
