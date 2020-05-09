import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./stocknav.component";

export default class HomeStock extends Component {
  render() {
    return (
      <div>
        <h3>Stock Management</h3>
        <Navbar />
      </div>
    );
  }
}
