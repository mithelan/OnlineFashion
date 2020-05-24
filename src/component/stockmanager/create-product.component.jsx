import React, { Component } from "react";

import axios from "axios";
import Navbar from "./stocknav.component";

export default class CreateProducts extends Component {
  constructor(props) {
    super(props);

    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    // this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      categroy: "",
      description: "",
      price: 0,
      color: "",
      // gender: "male",
      size: "",
      file: "",
      filename: "Choose File",
      quantity: 0,
      uploaded: {},
      brand: "Both",
      categories: [],
      category: "",
      brands: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/products/category").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          categories: response.data.map((category) => category.category),
          category: response.data[0].category,
        });
      }
    });

    axios.get("http://localhost:5000/brands/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          brands: response.data.map((brand) => brand.brand),
        });
      }
    });
  }

  onChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }

  onChangeBrand(e) {
    this.setState({
      brand: e.target.value,
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

  onChangeColor(e) {
    this.setState({
      color: e.target.value,
    });
  }

  onChangeQuantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }

  onChange = (e) => {
    this.setState({
      file: e.target.files[0],
      filename: e.target.files[0].name,
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const product = {
      size: this.state.size,
      brand: this.state.brand,
      category: this.state.category,
      description: this.state.description,
      price: this.state.price,
      color: this.state.color,
      filename: this.state.filename,
      quantity: this.state.quantity,
    };

    console.log(product);

    axios
      .post("http://localhost:5000/products/add", product)
      .then((res) => console.log(res.data));

    window.location = "/stockmanager/addStocks";

    const formData = new FormData();
    formData.append("file", this.state.file);

    try {
      const res = axios.post(
        "http://localhost:5000/products/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { fileName, filePath } = res.data;

      this.setState({
        uploaded: { fileName, filePath },
      });
    } catch (err) {}
  }

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-5">
              <br />
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">CATEGORY</label>
                <div className="col-sm-9">
                  <select
                    onChange={this.onChangeCategory}
                    className="form-control border_only_field"
                  >
                    <option value="others">Select one</option>
                    {this.state.categories.map(function (category) {
                      return (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">BRAND</label>
                <div className="col-sm-9">
                  <select
                    onChange={this.onChangeBrand}
                    className="form-control border_only_field"
                  >
                    <option value="others">Select one</option>
                    {this.state.brands.map(function (brand) {
                      return (
                        <option key={brand} value={brand}>
                          {brand}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">PRICE</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    required
                    onChange={this.onChangePrice}
                    className="form-control border_only_field"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">SIZE</label>
                <div className="col-sm-9">
                  {/* <input
                    type="text"
                    required
                    onChange={this.onChangeSize}
                    className="form-control border_only_field"
                  /> */}
                  <select
                    className="form-control "
                    onChange={this.onChangeSize}
                  >
                    <option value="extra small">extra small</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                    <option value="extra large">extra large</option>
                    <option>double extra large</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">COLOR </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control border_only_field"
                    required
                    onChange={this.onChangeColor}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Quantity </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="form-control border_only_field"
                    required
                    onChange={this.onChangeQuantity}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-9"></div>
              </div>
            </div>
            <div className="col-md-7">
              {/* <h4>PRODUCT DESCRIPTION</h4> */}
              <br />
              <div className="form-group">
                <textarea
                  className="form-control border_only_field"
                  rows="8"
                  onChange={this.onChangeDescription}
                  placeholder="write description..."
                ></textarea>

                <div className="custom-file mb-4">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={this.onChange}
                  />
                  <label className="customer-file-label" htmlFor="customFile">
                    {this.state.filename}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark btn-block rounded-0 float-right "
          >
            Add Product
          </button>
        </form>
      </div>
    );
  }
}
