import React, { Component } from "react";

import axios from "axios";
import Navbar from "./stocknav.component";

export default class CreateProducts extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/users/").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Stock Management</h3>
        <Navbar />
        <div class="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <br />
            <br />

            <h4>Add new product</h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label className="h4 float-left"> Title</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>Brand: </label>
                <select
                  required
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                >
                  {this.state.users.map(function (user) {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>Gender </label>
                <select required className="form-control">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Both</option>
                </select>
              </div>

              <div className="form-group">
                <label>Color</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <input
                  type="submit"
                  value="Create Exercise Log"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
          <div className="col-md-7">
            <br />
            <br />
            <br />
            <div id="drop">
              Drop Here
              <a>Browse</a>
              <input type="file" name="upl" multiple />
            </div>

            <ul></ul>
            <div className="form-group">
              <label>Description</label>
              <textarea
                type="text"
                rows="8"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
