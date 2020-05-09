import React from "react";
import "../App.css";
import Logo from "../img/logo.PNG";
import { connect } from "react-redux";
import { addCart } from "../actions/addAction";
import Homepage from "./Homepage";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

function Home(props) {
  console.log(props);
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            <div className="mail-service">
              <i className=" fa fa-envelope"></i>
              fashion@gmail.com
            </div>
            <div className="phone-service">
              <i className=" fa fa-phone"></i>
              0777885111
            </div>
          </div>
          <div className="ht-right">
            <Link to="/stockmanager">
              <i className="fa fa-user"></i>Login
            </Link>

            <Link to="/Cart">
              <i className="fa fa-shopping-cart"></i>
            </Link>
            <span>{props.cartProps.cartNumber}</span>

            <div className="top-social">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="ti-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <img src={Logo} width="200" height="75" />

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
                <a href="./shop.html">Shop</a>
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
                <a href="./contact.html">Contact</a>
              </li>
              <li>
                <a href="#">More</a>
                <ul className="dropdown">
                  <li>
                    <a href="./shopping-cart.html">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="./check-out.html">Checkout</a>
                  </li>

                  <li>
                    <a href="./register.html">Register</a>
                  </li>
                  <li>
                    <a href="./login.html">Login</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div id="mobile-menu-wrap"></div>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { addCart })(Home);
