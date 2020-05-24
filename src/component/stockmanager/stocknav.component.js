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
          style={{ display: "none" }}
        >
          OUT OF STOCK
        </button>
        &nbsp;
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
