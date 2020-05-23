import React, { Component } from "react";
import axios from "axios";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      category: "",
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
  }

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.props.onSubmit}>
          <div className="row">
            <div className="col-md-5">
              <br />
              <div className="form-group row">
                <label className="col-sm-2 col-form-label">CATEGORY</label>
                <div className="col-sm-10">
                  <select
                    value={this.props.category}
                    required
                    onChange={this.props.onChangeCategory}
                    className="form-control border_only_field"
                  >
                    <option>Others</option>
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
                <label className="col-sm-2 col-form-label">BRAND</label>
                <div className="col-sm-10">
                  <select
                    className="form-control"
                    value={this.props.brand}
                    onChange={this.props.onChangeBrand}
                  >
                    <option value="Others">Other</option>
                    <option value="Nike">Nike</option>
                    <option value="Inditex">Inditex </option>
                    <option value="H and M">H and M </option>
                    <option value="Louris Vuitton">Louris Vuitton</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Uniqlo">Uniqlo</option>
                    <option value="Hermes">Hermes</option>
                    <option value="Gucci">Gucci</option>
                    <option value="Michael Kors">Michael Kors</option>
                    <option value="Ralph Lauren">Ralph Lauren</option>
                    <option value=" Prada"> Prada</option>
                    <option value="Levi Strauss and Co">
                      Levi Strauss and Co
                    </option>
                  </select>
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
                  {/* <input
                    type="text"
                    required
                    value={this.props.size}
                    onChange={this.props.onChangeSize}
                    className="form-control"
                  /> */}

                  <select
                    className="form-control "
                    onChange={this.props.onChangeSize}
                    value={this.props.size}
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

              {/* <div className="form-group row">
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
              </div> */}

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
