import React, { Component } from "react";
import HomeStock from "./homeStock";
import CreateProducts from "./create-product.component";
import Navbar from "./stocknav.component";

export default class StockMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Stock Management</h1>
        <Navbar />

        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            {" "}
            <button
              className="btn btn-dark rounded-0 btn-block btn-lg btn-function"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              + ADD NEW PRODUCT
            </button>
          </div>
        </div>

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

        {/* hidden element to show table view  */}
        <div>
          <HomeStock />
        </div>
        {/* // end of hiddem element to show table view  */}
      </div>
    );
  }
}
