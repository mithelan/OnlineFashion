import React, { Component } from "react";

export default class EditProduct extends Component {
  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.props.onSubmit}>
          <div className="row">
            <div className="col-md-5">
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">TITLE</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    required
                    value={this.props.title}
                    onChange={this.props.onChangeTitle}
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
                    value={this.props.price}
                    onChange={this.props.onChangePrice}
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
                    value={this.props.size}
                    onChange={this.props.onChangeSize}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">GENDER</label>
                <div className="col-sm-10">
                  <select
                    className="form-control"
                    value={this.props.gender}
                    required
                    onChange={this.props.onChangeGender}
                  >
                    <option value={this.props.gender}>
                      {this.props.gender}
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
                    value={this.props.color}
                    className="form-control"
                    required
                    onChange={this.props.onChangeColor}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Quantity </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    value={this.props.quantity}
                    required
                    onChange={this.props.onChangeQuantity}
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-10"></div>
              </div>
            </div>
            <div className="col-md-7">
              <br />
              <div className="form-group">
                <textarea
                  value={this.props.description}
                  className="form-control"
                  rows="6"
                  required
                  onChange={this.props.onChangeDescription}
                ></textarea>

                <div className="custom-file mb-4">
                  <input
                    type="file"
                    className="form-control"
                    id="customFile"
                    onChange={this.props.onChangePhoto}
                  />
                  <div className="row">
                    <div className="col-md-2">
                      <label
                        className="customer-file-label"
                        htmlFor="customFile"
                      >
                        {this.props.filename}
                      </label>
                    </div>
                    <div className="col-md-6">
                      <img
                        src={`/images/productPhotos/${this.props.filename}`}
                        height="200"
                        width="200"
                      />
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <button
              type="submit"
              className="btn btn-dark  float-right btn-block "
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    );
  }
}
