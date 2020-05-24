import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Update = (props) => (
  <a
    href="#"
    onClick={() => {
      props.EditProfile(props.user.id);
    }}
  >
    Edit
  </a>
);

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      user: [],
    };
  }

  Profile() {
    return this.state.user.map((currentstock) => {
      return <Update user={currentstock} key={currentstock._id} />;
    });
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios
      .get(
        "http://localhost:5000/api/auth/user",

        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )

      .then((response) => {
        const data = response.data;
        this.setState({ email: data.email, name: data.name });
        console.log("data recieve" + this.state.email);
      })
      .catch(() => {
        alert("error");
      });
  };

  render() {
    return (
      <div>
        <h1>Profile </h1>
        Email:{" "}
        <input
          type="text"
          value={this.state.email}
          onChange={this.setEmail}
        ></input>
        <br></br>
        Name:{" "}
        <input
          type="text"
          value={this.state.name}
          onChange={this.setName}
        ></input>
        {this.Profile()}
        <button
          type="button"
          className="btn btn-light"
          data-toggle="modal"
          data-target="#exampleModalLong"
        >
          Edit Here
        </button>
        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Reviews
                </h5>
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
                <form>
                  Email:{" "}
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.setEmail}
                  ></input>
                  <br></br>
                  Name:{" "}
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.setName}
                  ></input>
                </form>

                {Update}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
