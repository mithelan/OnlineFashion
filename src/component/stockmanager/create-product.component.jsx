import React, { Component } from "react";

import axios from "axios";
import Navbar from "./stocknav.component";

export default class CreateProducts extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      price: 0,
      color: "",
      gender: "",
      size: "",
      users: [],
    };
  }

  // componentDidMount() {
  //   axios.get("http://localhost:5000/users/").then((response) => {
  //     if (response.data.length > 0) {
  //       this.setState({
  //         users: response.data.map((user) => user.username),
  //         username: response.data[0].username,
  //       });
  //     }
  //   });
  // }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeSize(e) {
    this.setState({
      size: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  onChangeColor(e) {
    this.setState({
      color: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      gender: this.state.gender,
      color: this.state.color,
      size: this.state.size,
    };

    console.log(product);

    axios
      .post("http://localhost:5000/products/add", product)
      .then((res) => console.log(res.data));

    window.location = "/stockmanager/addStocks";
  }

  render() {
    return (
      <div>
        <h3>Stock Management</h3>
        <Navbar />
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-5">
              <h4>PRODUCT DETAILS</h4>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">TITLE</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    required
                    onChange={this.onChangeTitle}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">BRAND</label>
                <div className="col-sm-10">
                  <select className="form-control"></select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">PRICE</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    required
                    onChange={this.onChangePrice}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">SIZE</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    required
                    onChange={this.onChangeSize}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">GENDER</label>
                <div className="col-sm-10">
                  <select
                    className="form-control"
                    required
                    onChange={this.onChangeGender}
                  >
                    <option>male</option>
                    <option>female</option>
                    <option>both</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">COLOR </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    required
                    onChange={this.onChangeColor}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-dark  float-right ">
                    Add Product
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h4>PRODUCT DESCRIPTION</h4>
              <br />
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="8"
                  required
                  onChange={this.onChangeDescription}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
