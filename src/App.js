import React from "react";
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
import "bootstrap/dist/css/bootstrap.min.css";
import HomeStock from "./component/stockmanager/homeStock";
import Register from "./component/Login/Register";
import Login from "./component/Login/Login";
import Profile from "./component/Login/Profile";
import EditProduct from "./component/stockmanager/edit-product.component";

//end of narthi

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Home />
          <Switch>
            <Route exact path="/" component={ProductDisplay} />
            //User
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Profile" component={Profile} />
            <Route path="/stockmanager" component={HomeStock} />
            <Route path="/addStock" component={CreateProducts} />
            <Route path="/Contactus" component={Contactus} />
            >
            <Route path="/editStock" component={EditProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/Checkout" component={Checkout} />
            <Route path="/products/:productsId" component={ProductDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
