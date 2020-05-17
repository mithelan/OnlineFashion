import React, {useContext} from "react";
import "../App.css";
import Logo from "../img/logo.PNG";
import { connect } from "react-redux";
import { addCart } from "../actions/addAction";
import Homepage from "./Homepage";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";
import Contactus from "./Contactus";


function Home(props) {
  console.log(props);




  return (
    <header className="header-section">
<div >

      <img src={Logo} width="200" height="75" />

<h3 className='text-right'>


</h3>
  <div className="text-right">
    <Link to="/stockmanager">
      <i className="fa fa-user"></i>Login
    </Link>

   

    <Link to="/stockmanagerlogin">
      <i className="fa fa-save"></i>Stock Manager
    </Link>

  <Link to="/Cart">
    <i className="fa fa-shopping-cart"></i>
  </Link>

</div>
      <div className="nav-item">
        <div className="container">
          <div className="nav-depart">
            <div className="depart-btn">
              <i className="ti-menu"></i>
              <span>All departments</span>
              <ul className="depart-hover">
                <li className="active">
                  <a href="#">Women’s Clothing</a>
                </li>
                <li>
                  <a href="#">Men’ss Clothing</a>
                </li>
                <li>
                  <a href="#">Accessories/Shoes</a>
                </li>
              </ul>
            </div>
          </div>
          <nav className="nav-menu mobile-menu">
            <ul>
              <li className="active">
                <a href="">Home</a>
              </li>
              <li>
                <a href="/ProductDisplay.js">Shop</a>
              </li>
              <li>
                <a href="#">Collection</a>
                <ul className="dropdown">
                  <li>
                    <a href="#">Men's</a>
                  </li>
                  <li>
                    <a href="#">Women's</a>
                  </li>
                  <li>
                    <a href="#">Accessories/Shoes</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href='Contactus'>Contact</a>
              </li>
              <li>
                <a href="#">More</a>
                <ul className="dropdown">
                  <li>
                    <a href="./Cart.js">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="./check-out.html">Checkout</a>
                  </li>

                  <li>
                    <a href="/register">Register</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
</div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { addCart })(Home);
