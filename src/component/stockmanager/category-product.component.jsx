import React, { Component } from "react";
import axios from "axios";
import CreateProducts from "./create-product.component";

export default class CategoryProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productsBeach: [],
      productsWomen: [],
      productsMen: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/products/categoryProduct/" + "Beach")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            productsBeach: response.data.map((product) => product),
          });
        }
      });

    axios
      .get("http://localhost:5000/products/categoryProduct/" + "Women")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            productsWomen: response.data.map((product) => product),
          });
        }
      });

    axios
      .get("http://localhost:5000/products/categoryProduct/" + "Men")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            productsMen: response.data.map((product) => product),
          });
        }
      });
  }

  render() {
    return (
      <div>
        <br />
        {/* add new product button  */}
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <button
              className="btn btn-dark rounded-0 btn-block btn-lg btn-function"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              + ADD NEW PRODUCT
            </button>
          </div>
        </div>
        {/* end of add new product button  */}
        <div className="float-left">
          {/* row for beach  */}
          <h3>Beach</h3>
          <div className="row">
            {this.state.productsBeach.map(function (product) {
              return (
                <div className="col">
                  <h5>{product.brand}</h5>
                  <img
                    src={`/images/productPhotos/${product.filename}`}
                    height="180"
                    width="180"
                  />
                </div>
              );
            })}
          </div>
          {/* end of row for beach  */}
          <br />

          {/* row for women  */}
          <h4>Women</h4>
          <div className="row">
            {this.state.productsWomen.map(function (product) {
              return (
                <div className="col">
                  <h5>{product.brand}</h5>
                  <img
                    src={`/images/productPhotos/${product.filename}`}
                    height="180"
                    width="180"
                  />
                </div>
              );
            })}
          </div>

          {/* end of row for women  */}

          {/* row for men  */}
          <h4>Men</h4>
          <div className="row">
            {this.state.productsMen.map(function (product) {
              return (
                <div className="col">
                  <h5>{product.brand}</h5>
                  <img
                    src={`/images/productPhotos/${product.filename}`}
                    height="180"
                    width="180"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* end of row for men  */}

        <br />
        <br />

        {/* modal for creating new product */}
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h2 style={{ letterSpacing: "5px" }} className="text-center">
                  ADD PRODUCT
                </h2>

                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <CreateProducts />
              </div>
            </div>
          </div>
        </div>
        {/* end of modal for creating product  */}
      </div>
    );
  }
}
