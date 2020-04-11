<<<<<<< HEAD
import React from "react";
import "../App.css";
import Logo from "../img/logo.PNG";

function Home() {
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
              +94 0772380753
=======
import React from 'react';
import '../App.css';
import Logo from '../img/logo.PNG';
import {connect} from 'react-redux'
import {addCart} from "../actions/addAction";
import Homepage from "./Homepage";
import {getNumbers} from "../actions/getAction";
import {Link} from 'react-router-dom';


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
                          0772380753
                        </div>
                    </div>
                    <div className="ht-right">
                        <a href="#" className="login-panel"><i className="fa fa-user"></i>Login</a>

                        <Link to ="/Cart"><i className="fa fa-shopping-cart"></i></Link><span>{props.cartProps.cartNumber}</span>


                        <div className="top-social">
                            <Link to ="/"><i className="fa fa-facebook"></i></Link>
                            <Link to ="#"><i className="fa fa-twitter"></i></Link>
                            <Link to ="#"><i className="fa fa-instagram"></i></Link>
                            <Link to ="#"><i className="ti-pinterest"></i></Link>
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
                                <li className="active"><a href="#">Women’s Clothing</a></li>
                                <li><a href="#">Men’s Clothing</a></li>
                                <li><a href="#">Accessories/Shoes</a></li>

                            </ul>
                        </div>
                    </div>
                    <nav className="nav-menu mobile-menu">
                        <ul>
                            <li className="active"><a href="./index.html">Home</a></li>
                            <li><a href="./shop.html">Shop</a></li>
                            <li><a href="#">Collection</a>
                                <ul className="dropdown">
                                    <li><a href="#">Men's</a></li>
                                    <li><a href="#">Women's</a></li>
                                    <li><a href="#">Accessories/Shoes</a></li>
                                </ul>
                            </li>

                            <li><a href="./contact.html">Contact</a></li>
                            <li><a href="#">More</a>
                                <ul className="dropdown">
                                    <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                    <li><a href="./check-out.html">Checkout</a></li>

                                    <li><a href="./register.html">Register</a></li>
                                    <li><a href="./login.html">Login</a></li>


                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"></div>
                </div>
>>>>>>> bd0e03e2973caee780d2da01ae770a1eeda1fe07
            </div>
          </div>
          <div className="ht-right">
            <a href="#" className="login-panel">
              <i className="fa fa-user"></i>Login
            </a>

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
                  <a href="#">Men’s Clothing</a>
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
                <a href="./index.html">Home</a>
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
const mapStateToProps=state =>({
    cartProps:state.cartState
})


<<<<<<< HEAD
export default Home;
=======
export default connect(mapStateToProps,{addCart})(Home);
>>>>>>> bd0e03e2973caee780d2da01ae770a1eeda1fe07
