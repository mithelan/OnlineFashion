import React, {Component, Fragment, useContext} from "react";
import "../App.css";
import Logo from "../img/logo.PNG";
import { connect } from "react-redux";
import { addCart } from "../actions/addAction";
import Homepage from "./Homepage";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";
import Contactus from "./Contactus";
import  Logout from '../user_login/components/auth/Logout'




import Login from '../user_login/components/auth/LoginModal'
import Register from '../user_login/components/auth/RegisterModal'
import {Navbar} from "react-bootstrap";
import PropTypes from 'prop-types'
import {Nav} from "reactstrap";

class Home extends Component{

  state={
    isOpen:false
  };
  static propTypes={
    auth: PropTypes.object.isRequired
  }

  toggle=()=>{
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  render() {

    const { isAuthenticated,user  }=this.props.auth;

    const authLinks=(

        <Fragment>
          <Navbar>
            <span className="navbar-text mr-3">
            <p>k</p>
              <strong>{user? `Welcome ${user.name}` : ``}</strong>
            </span>
            <Logout/>
          </Navbar>

        </Fragment>
    )

    const guestLinks=(
        <Fragment>
          <Navbar>
            <Login/>
            <Register/>


          </Navbar>
        </Fragment>
    )

    return (
        <header className="header-section">
          <div className='navbar'>

            <img src={Logo} width="200" height="75"/>

            <h3 className='text-right'>

            </h3>
            <div>


              <Nav className='ml-auto' navbar>
                {isAuthenticated? authLinks:guestLinks}
              </Nav>
              <Link to="/stockmanager">
                <i className="fa fa-user"></i>Login
              </Link>

              <Link to="/Cart">
                <i className="fa fa-shopping-cart"></i>
              </Link>
              <span></span></div>
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
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/ProductDisplay.js">Shop</a>
                  </li>
                  <li>
                    <a href="#">Collection</a>
                    <ul className="dropdown">
                      <li>
                        <a href="/MaleProductDisplay">Men's</a>
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
                        <a href="/Cart.js">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="/J">Checkout</a>
                      </li>

                      <li>
                        <a href="/Register">Register</a>
                      </li>
                      <li>
                        <a href="/Login">Login</a>
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
}
const mapStateToProps = state=> ({

  auth:state.auth
});

export default connect(mapStateToProps,null)(Home);
