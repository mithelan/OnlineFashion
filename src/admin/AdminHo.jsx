import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import AdminNavBar from "./adminNav.component";
import axios from "axios";


export default class AdminHo extends Component {
    constructor(props) {
        super(props);
        this.state = this.addC

        this.registerCategory=this.registerCategory.bind(this);
        this.submitCategory=this.submitCategory.bind(this);

    }

    addC={
        category:'',

    }

    submitCategory(event){
        event.preventDefault();

        const  addCategory ={
            category:this.state.category,

        };
        console.log(addCategory)
        axios.post("http://localhost:5000/category/addcategory",addCategory)



    }
    registerCategory(event){
        this.setState({
            [event.target.name] :event.target.value
        })
    }













            render() {
            return (
                <div>
                <Jumbotron fluid>
                    <Container>
                        <h6>ADMIN MANAGEMENT </h6>

                    </Container>
                    <AdminNavBar/>
                </Jumbotron>
            <div className="container">
            <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
            <form  autoComplete="off"  onSubmit={this.submitCategory} >

            <div className="form-group">
            <label htmlFor="email">ADD CATEGORY</label>
            <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Enter category"
            value={this.state.category} onChange={this.registerCategory}
            />
            </div>
                <Card.Footer style={{textAlign:"right"}}  size={"sm"}>
            <button
            type="submit"
            className="btn btn-lg btn-primary "
            >
            ADD
            </button>
                </Card.Footer>
            </form>
            </div>
            </div>
            </div>
                </div>
            )
        }
            }







