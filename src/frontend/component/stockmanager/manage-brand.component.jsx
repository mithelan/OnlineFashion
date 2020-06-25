import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./stocknav.component";

const Brand = (props) => (
  <tr>
    <td>{props.brand.brand}</td>
    <td>{props.brand.phone}</td>
    <td>{props.brand.address}</td>

    <td>
      {/* edit icon  */}
      <i
        className="fa fa-pencil fa-3x"
        data-toggle="modal"
        data-target="#exampleModalCenter2"
        onClick={() => {
          props.getBrand(props.brand._id);
        }}
      ></i>
      {/* end of edit icon  */} {/* delete icon  */}
      <i
        className="fa fa-trash fa-3x"
        style={{ color: "#d60928" }}
        onClick={() => {
          props.deleteBrand(props.brand._id);
        }}
      ></i>
      {/* end of delete icon  */}
    </td>
  </tr>
);

export default class ManageBrand extends Component {
  constructor(props) {
    super(props);

    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.deleteBrand = this.deleteBrand.bind(this);
    this.getBrand = this.getBrand.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      brand: "",
      phone: "",
      address: "",
      brands: [],
      currentId: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://backend77.herokuapp.com/brands/")
      .then((response) => {
        this.setState({ brands: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    document.getElementById("save").style.display = "block";
    document.getElementById("update").style.display = "none";
  }

  deleteBrand(id) {
    axios.delete("https://backend77.herokuapp.com/brands/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      brands: this.state.brands.filter((el) => el._id !== id),
    });
  }

  getBrand(id) {
    axios
      .get("https://backend77.herokuapp.com/brands/get/" + id)
      .then((response) => {
        this.setState({
          brand: response.data.brand,
          phone: response.data.phone,
          address: response.data.address,
          currentId: id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    document.getElementById("save").style.display = "none";
    document.getElementById("update").style.display = "block";
  }

  brandList() {
    return this.state.brands.map((currentbrand) => {
      return (
        <Brand
          brand={currentbrand}
          deleteBrand={this.deleteBrand}
          getBrand={this.getBrand}
          key={currentbrand._id}
        />
      );
    });
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value,
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const companyBrand = {
      brand: this.state.brand,
      phone: this.state.phone,
      address: this.state.address,
    };

    console.log(companyBrand);

    axios
      .post("https://backend77.herokuapp.com/brands/add", companyBrand)
      .then((res) => console.log(res.data));

    window.location = "/managebrand";
  }

  onUpdate(e) {
    e.preventDefault();

    const brand = {
      brand: this.state.brand,
      phone: this.state.phone,
      address: this.state.address,
    };

    console.log(brand);

    axios
      .post(
        "https://backend77.herokuapp.com/brands/update/" + this.state.currentId,
        brand
      )
      .then((res) => console.log(res.data));

    window.location = "/managebrand";
  }

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
            <input
              type="text"
              className="form-control"
              value={this.state.brand}
              onChange={this.onChangeBrand}
            />
            <label>Phone Number</label>
            <input
              type="text"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
            <label>Address</label>
            <textarea
              type="text"
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
            <button
              className="float-right mt-2 btn-dark btn-lg"
              onClick={this.onSubmit}
              id="save"
            >
              SAVE
            </button>
            <button
              className="float-right mt-2 btn-dark btn-lg"
              onClick={this.onUpdate}
              id="update"
            >
              UPDATE
            </button>
            <br /> <br /> <br />
          </div>
          <div className="col-md-9">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Brand Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>{this.brandList()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
