import React,{Component} from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import {Card, Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {loginAd} from "./adminloginactions";


export default class LoginAdmin extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const admin = {
            username: this.state.username,
            password: this.state.password
        }

        loginAd(admin).then(res => {
            if (res) {
                this.props.history.push('/admin')
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">UserName</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="username"
                                    placeholder="Enter password"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}




