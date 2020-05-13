import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./stocknav.component";
import axios from "axios";

const Product = (props) => (
  <tr>
    <td>{props.product.title}</td>
    <td>{props.product.brand}</td>
    <td>{props.product.price}</td>
    <td>{props.product.color}</td>
    <td>{props.product.gender}</td>
    <td>{props.product.size}</td>
    <td>
      <label className="badge badge-primary">{props.product.quantity}</label>
    </td>
    <td>{props.product.description}</td>
    <td>
      <img
        src={`/images/productPhotos/${props.product.filename}`}
        height="180"
        width="180"
      />
    </td>
    <td>
      <Link to={"/editStock/" + props.product._id} className="btn btn-warning">
        edit
      </Link>{" "}
      |{" "}
      <a
        href="#"
        className="btn btn-danger"
        onClick={() => {
          props.deleteProduct(props.product._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class HomeStock extends Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);

    this.state = { products: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/products/")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProduct(id) {
    axios.delete("http://localhost:5000/products/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      products: this.state.products.filter((el) => el._id !== id),
    });
  }

  productList() {
    return this.state.products.map((currentproduct) => {
      return (
        <Product
          product={currentproduct}
          deleteProduct={this.deleteProduct}
          key={currentproduct._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Stock Management</h3>
        <Navbar />
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Color</th>
              <th>Gender</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Desctiption</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>{this.productList()}</tbody>
        </table>
      </div>
    );
  }
}
