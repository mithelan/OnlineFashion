import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          DASHBOARD
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/stockmanager" className="nav-link">
                PRODUCTS
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/addStock" className="nav-link">
                ADD PRODUCT
              </Link>
            </li>

            {/* <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
