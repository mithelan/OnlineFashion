import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./stocknav.component";

export default class ManageBrand extends Component {
  render() {
    return (
      <div>
        <h1>Stock Management</h1>
        <div className="row">
          <Navbar />
        </div>
        <br />

        <div className="row">
          <div className="col-md-3 brandbox">
            <h3>Register Brand</h3>
            <label>Brand Name</label>
            <input type="text" class="form-control" />
            <label>Phone Number</label>
            <input type="text" class="form-control" />
            <label>Address Line 1</label>
            <input type="text" class="form-control" />
            <label>Address Line 2</label>
            <input type="text" class="form-control" />

            <button className="float-right mt-2 btn-dark btn-lg">SAVE</button>
          </div>
          <div className="col-md-9">Asokan</div>
        </div>
      </div>
    );
  }
}
