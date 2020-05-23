import React, { Component } from "react";

import Navbar from "./stocknav.component";
import axios from "axios";
import CreateProducts from "./create-product.component";
import EditProduct from "./edit-product.component";

const Product = (props) => (
  <tr>
    <td>{props.product.title}</td>
    <td>{props.product.brand}</td>
    <td>{props.product.price}</td>
    <td>{props.product.color}</td>
    {/* <td>{props.product.gender}</td> */}
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
      {/* <Link to={"/editStock/" + props.product._id} className="btn btn-warning">
        edit
      </Link>{" "} */}
      <button
        className="btn btn-warning"
        data-toggle="modal"
        data-target="#exampleModalCenter2"
        onClick={() => {
          props.getProduct(props.product._id);
        }}
      >
        EDIT
      </button>
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
    this.getProduct = this.getProduct.bind(this);

    this.state = {
      products: [],
      title: "",
      description: "",
      price: 0,
      color: "",
      // gender: "male",
      size: "",
      file: "",
      filename: "Choose File",
      quantity: 0,
      uploaded: {},
      currentId: "",
      brand: "",
    };
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
          getProduct={this.getProduct}
          key={currentproduct._id}
        />
      );
    });
  }

  //method for edit

  getProduct(id) {
    axios
      .get("http://localhost:5000/products/get/" + id)
      .then((response) => {
        this.setState({
          title: response.data.title,
          brand: response.data.brand,
          price: response.data.price,
          size: response.data.size,
          // gender: response.data.gender,
          color: response.data.color,
          quantity: response.data.quantity,
          description: response.data.description,
          filename: response.data.filename,
          currentId: id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeTitle(key, event) {
    this.setState({
      title: event.target.value,
    });
  }

  onChangeBrand(key, event) {
    this.setState({
      brand: event.target.value,
    });
  }

  onChangeDescription(key, event) {
    this.setState({
      description: event.target.value,
    });
  }

  onChangeSize(key, event) {
    this.setState({
      size: event.target.value,
    });
  }

  onChangePrice(key, event) {
    this.setState({
      price: event.target.value,
    });
  }

  // onChangeGender(key, event) {
  //   this.setState({
  //     gender: event.target.value,
  //   });
  // }

  onChangeColor(key, event) {
    this.setState({
      color: event.target.value,
    });
  }

  onChangeQuantity(key, event) {
    this.setState({
      quantity: event.target.value,
    });
  }

  onChangePhoto(key, event) {
    this.setState({
      file: event.target.files[0],

      filename: event.target.files[0].name,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      filename: this.state.filename,
      quantity: this.state.quantity,
      size: this.state.size,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      // gender: this.state.gender,
      brand: this.state.brand,
      color: this.state.color,
    };

    console.log(product);

    axios
      .post(
        "http://localhost:5000/products/update/" + this.state.currentId,
        product
      )
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
        <h3>Stock Management</h3>
        <br />
        <br />
        {/* <Navbar /> */}
        <div className="row">
          <div className="col-md-9"></div>
          <div className="col-md-3">
            <button
              style={{ letterSpacing: "1px" }}
              className="btn btn-dark rounded-0 btn-block btn-lg"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Add New Product
            </button>
          </div>
        </div>
        <br />
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Color</th>
              {/* <th>Gender</th> */}
              <th>Size</th>
              <th>Quantity</th>
              <th>Desctiption</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>{this.productList()}</tbody>
        </table>

        {/* modal for creating new prduct */}
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

        {/* modal for editing prduct */}
        <div
          className="modal fade"
          id="exampleModalCenter2"
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
                  EDIT PRODUCT
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

              {/* modal for edit */}
              <div className="modal-body">
                <EditProduct
                  title={this.state.title}
                  price={this.state.price}
                  description={this.state.description}
                  quantity={this.state.quantity}
                  color={this.state.color}
                  brand={this.state.brand}
                  // gender={this.state.gender}
                  size={this.state.size}
                  filename={this.state.filename}
                  onChangeTitle={this.onChangeTitle.bind(this, "title")}
                  onChangeBrand={this.onChangeBrand.bind(this, "brand")}
                  onChangePrice={this.onChangePrice.bind(this, "price")}
                  onChangeDescription={this.onChangeDescription.bind(
                    this,
                    "description"
                  )}
                  // onChangeGender={this.onChangeGender.bind(this, "gender")}
                  onChangeQuantity={this.onChangeQuantity.bind(
                    this,
                    "quantity"
                  )}
                  onChangeColor={this.onChangeColor.bind(this, "color")}
                  onChangeSize={this.onChangeSize.bind(this, "size")}
                  onChangePhoto={this.onChangePhoto.bind(this, "file")}
                  onSubmit={this.onSubmit.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
