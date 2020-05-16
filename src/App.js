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
import Register from "./Justu/Register";
import Loginn from "./Justu/Loginn";
import Profile from "./component/Login/Profile";
import Axios from "axios";
import UserContext from "./Justu/UserContext";

//end of narthi

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/customers/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/customers/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <UserContext.Provider value={{ userData, setUserData }}>
            <Home />
            <Switch>
              <Route exact path="/" component={ProductDisplay} />
              //User
              <Route path="/Login" component={Loginn} />
              <Route path="/Register" component={Register} />
              <Route path="/Profile" component={Profile} />
              <Route path="/stockmanager" component={HomeStock} />
              <Route path="/addStock" component={CreateProducts} />
              <Route path="/editStock/:id" component={EditProduct} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/addStock" component={CreateProducts} />
              <Route path="/cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} />
              <Route path="/products/:productsId" component={ProductDetail} />
            </Switch>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
