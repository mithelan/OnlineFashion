import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  changeColor() {
    document.getElementById("button").style.color = "gold";
    document.getElementById("button2").style.color = "white";
    document.getElementById("button3").style.color = "white";
  }

  changeColor2() {
    document.getElementById("button2").style.color = "gold";
    document.getElementById("button").style.color = "white";
    document.getElementById("button3").style.color = "white";
  }

  changeColor3() {
    document.getElementById("button3").style.color = "gold";
    document.getElementById("button2").style.color = "white";
    document.getElementById("button").style.color = "white";
  }

  render() {
    return (
      <div className="float-left">
        {/* <button
          className="btn btn-dark md-2 "
          style={{ letterSpacing: "1px" }}
          id="button"
          onClick={this.changeColor}
        >
          ALL PRODUCTS
        </button> */}
        <Link
          to={"/stockmanager/"}
          style={{ letterSpacing: "1px" }}
          id="button"
          onClick={this.changeColor}
          className="btn btn-dark md-2"
        >
          ALL PRODUCTS
        </Link>
        &nbsp;
        <button
          className="btn btn-dark"
          id="button2"
          onClick={this.changeColor2}
        >
          OUT OF STOCK
        </button>
        &nbsp;
        {/* <button
          className="btn btn-dark"
          id="button3"
          onClick={this.changeColor3}
        >
          MANAGE BRANDS
        </button> */}
        <Link
          onClick={this.changeColor3}
          style={{ letterSpacing: "1px" }}
          to={"/managebrand/"}
          id="button3"
          className="btn btn-dark md-2"
        >
          MANAGE BRANDS
        </Link>
        <br />
      </div>
    );
  }
}
