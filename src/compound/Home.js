import React, {Component, Fragment, useContext} from "react";
import "../App.css";
import Logo from "../css/img/logo.PNG";
import { connect } from "react-redux";
import { addCart } from "../actions/addAction";
import Homepage from "./Homepage";
import Register from '../user_login/RegisterModal'
import {Badge, Navbar} from "react-bootstrap";
import PropTypes from 'prop-types'
import {Nav} from "reactstrap";


class Home extends Component{

  dologout(){
    localStorage.clear()

    window.location='/'


  }
  namemethod(){
    let payload = this.parseJwt(localStorage.getItem("token"))
    if(localStorage.length !== 0){
      return(
          <div>

            <h4>Welcome  <h2 color='white'>
              {/*{payload.name}*/}
            </h2></h4>
          </div>
      )
    }
    else{

    }
  }
  isAuth(){
    let payload = this.parseJwt(localStorage.getItem("token"))
    if(localStorage.length !== 0){
      return (
          <Navbar>


            <Badge count={1}>
              <a href='/cartpage'>
                <ion-icon name="cart-outline"></ion-icon>
              </a>
            </Badge>
            <a  className="d-inline p-2 text-dark" href='/Profile'>Profile</a>
            <a  className="d-inline p-2 text-dark" onClick={this.dologout}>LOGOUT</a>

          </Navbar>
      )

    }else{
      return (
          <Navbar>
            <a  className="d-inline p-2 text-dark" href='/Login'>Login</a>
            <a  className="d-inline p-2 text-dark" href='/Register'>Register</a>

          </Navbar>
      ) }
  }



  parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    // const base64 = base64Url.replace().replace();
    return JSON.parse(window.atob(base64Url));
  }

  render() {
    let payload = this.parseJwt(localStorage.getItem("token"))


    const authLinks=(

        <Fragment>
          <Navbar>
            <span className="navbar-text mr-3">
            <p></p>

            </span>

          </Navbar>
        </Fragment>

    )

    const guestLinks=(
        <Fragment>
          <Navbar>

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

              </Nav>


              {this.namemethod()}
              {this.isAuth()}
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
                    <a href="/">Shop</a>
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
                        <a href="/stockmanager"> Staff Login</a>
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
