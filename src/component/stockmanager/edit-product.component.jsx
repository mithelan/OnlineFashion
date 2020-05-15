import React, { Component } from "react";

import axios from "axios";
import Navbar from "./stocknav.component";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeColor = this.onChangeColor.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      description: "",
      price: 0,
      color: "",
      gender: "male",
      size: "",
      file: "",
      filename: "Choose File",
      quantity: 0,
      uploaded: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/get/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          title: response.data.title,
          brand: response.data.brand,
          price: response.data.price,
          size: response.data.size,
          gender: response.data.gender,
          color: response.data.color,
          quantity: response.data.quantity,
          description: response.data.description,
          filename: response.data.filename,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios
    //   .get("http://localhost:5000/users/")
    //   .then((response) => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map((user) => user.username),
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

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
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      gender: this.state.gender,
      color: this.state.color,
      filename: this.state.filename,
      quantity: this.state.quantity,
    };

    console.log(product);

    axios
      .post(
        "http://localhost:5000/products/update/" + this.props.match.params.id,
        product
      )
      .then((res) => console.log(res.data));
    // const { fileName, filePath } = res.data;
    // this.setState({
    //   uploaded: { fileName, filePath },
    // });
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
        <h3>Stock Management</h3>
        <Navbar />
        <br />
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-5">
              <h4>EDIT PRODUCT DETAILS</h4>
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">TITLE</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    required
                    value={this.state.title}
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
                    value={this.state.price}
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
                    value={this.state.size}
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
                    value={this.state.gender}
                    required
                    onChange={this.onChangeGender}
                  >
                    <option value={this.state.gender}>
                      {this.state.gender}
                    </option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="both">both</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">COLOR </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    value={this.state.color}
                    className="form-control"
                    required
                    onChange={this.onChangeColor}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Quantity </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.quantity}
                    required
                    onChange={this.onChangeQuantity}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-dark  float-right ">
                    Update Product
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h4>EDIT PRODUCT DESCRIPTION</h4>
              <br />
              <div className="form-group">
                <textarea
                  value={this.state.description}
                  className="form-control"
                  rows="6"
                  required
                  onChange={this.onChangeDescription}
                ></textarea>

                <div className="custom-file mb-4">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={this.onChange}
                  />
                  <div className="row">
                    <div className="col-md-2">
                      <label
                        className="customer-file-label"
                        htmlFor="customFile"
                      >
                        {this.state.filename}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={`/images/productPhotos/${this.state.filename}`}
                        height="200"
                        width="200"
                      />
                    </div>
                    <div className="col-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}