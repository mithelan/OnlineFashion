import React from "react";
import Cart from "./compound/Cart";
import "./App.css";
import Home from "./compound/Home";
import Homep from "./compound/Homepage";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//narthi
import HomeStock from "./component/stockmanager/homeStock";
import CreateProducts from "./component/stockmanager/create-product.component";
import "bootstrap/dist/css/bootstrap.min.css";

//vithu
import RegisterSM from "./admin/registerStockManager";
import AdminHo from "./admin/AdminHo";
import LoginSM from "./admin/stockmanagerlogin";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Home />
          <Switch>
            <Route exact path="/" component={Homep} />
            <Route path="/stockmanager" component={HomeStock} />
            <Route path="/addStock" component={CreateProducts} />
            <Route path="/cart" component={Cart} />
            <Route path="/admin" exact component={AdminHo} />
            <Route path="/registerstock" exact component={RegisterSM} />
            <Route path="/loginstock" exact component={LoginSM} />

          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
