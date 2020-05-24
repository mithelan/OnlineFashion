import React, { Component } from "react";

import Navbar from "./stocknav.component";
import axios from "axios";

import EditProduct from "./edit-product.component";

const Product = (props) => (
  <tr>
    <td>{props.product.category}</td>
    <td>{props.product.brand}</td>
    <td>{props.product.price}</td>
    <td>{props.product.color}</td>
    <td>{props.product.size}</td>

    <td>
      <label
        className={
          props.product.quantity == 0
            ? "badge badge-danger"
            : "badge badge-primary"
        }
      >
        {props.product.quantity}
      </label>
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
      <br />
      <br />
      <br />
      {/* edit icon  */}
      <i
        className="fa fa-pencil fa-3x"
        data-toggle="modal"
        data-target="#exampleModalCenter2"
        onClick={() => {
          props.getProduct(props.product._id);
        }}
      ></i>
      {/* end of edit icon  */} {/* delete icon  */}
      <i
        className="fa fa-trash fa-3x"
        style={{ color: "#d60928" }}
        onClick={() => {
          props.deleteProduct(props.product._id);
        }}
      ></i>
      {/* end of delete icon  */}
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
      category: "",
      description: "",
      price: 0,
      color: "",

      size: "",
      file: "",
      filename: "Choose File",
      quantity: 0,
      uploaded: {},
      currentId: "",
      brand: "",
      categories: [],
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

    axios.get("http://localhost:5000/products/category").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          categories: response.data.map((category) => category.category),
        });
      }
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
          category: response.data.category,
          brand: response.data.brand,
          price: response.data.price,
          size: response.data.size,

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

  onChangeCategory(key, event) {
    this.setState({
      category: event.target.value,
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

  searchCategory() {
    var input = document.getElementById("searchCategory");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        var txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  searchQuantity() {
    var input = document.getElementById("searchQuantity");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        var txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      filename: this.state.filename,
      quantity: this.state.quantity,
      size: this.state.size,
      category: this.state.category,
      description: this.state.description,
      price: this.state.price,
      category: this.state.category,
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
        <div className="">
          <div className="row">
            <div className="col-md-3">
              <select
                onChange={this.searchCategory}
                className="form-control border_only_field"
                id="searchCategory"
              >
                <option value="">Filter by Category</option>
                {this.state.categories.map(function (category) {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-md-3">
              <select
                className="form-control"
                onChange={this.searchQuantity}
                id="searchQuantity"
              >
                <option value="">Filter By Availability</option>
                <option value="0">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>
        <br />
        <table className="table" id="myTable">
          <thead className="thead-light">
            <tr>
              <th className="theading">CATEGORY</th>
              <th className="theading">Brand</th>
              <th className="theading">Price</th>
              <th className="theading">Color</th>
              <th className="theading">Size</th>
              <th className="theading">Quantity</th>
              <th className="theading">Description</th>
              <th className="theading">Photo</th>
            </tr>
          </thead>
          <tbody>{this.productList()}</tbody>
        </table>
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
                  category={this.state.category}
                  price={this.state.price}
                  description={this.state.description}
                  quantity={this.state.quantity}
                  color={this.state.color}
                  brand={this.state.brand}
                  // gender={this.state.gender}
                  // cate
                  size={this.state.size}
                  filename={this.state.filename}
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
                  onChangeCategory={this.onChangeCategory.bind(
                    this,
                    "category"
                  )}
                  onSubmit={this.onSubmit.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of modal for edit product  */}
      </div>
    );
  }
}
