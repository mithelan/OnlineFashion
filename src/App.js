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
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
