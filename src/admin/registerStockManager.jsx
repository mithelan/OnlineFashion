import React,{Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Card,Col,Row} from "react-bootstrap";
import axios from 'axios';
import AdminNavBar from "./adminNav.component";
import Jumbotron from "react-bootstrap/Jumbotron";
export default class RegisterSM extends Component {

    constructor(props){
        super(props);
        this.state=this.initialstate
        this.registerChange=this.registerChange.bind(this);
        this.submitStockManager=this.submitStockManager.bind(this);

    }
    initialstate={
                username:'',password:'',email:'',contactno:''

    }
    resetBlanks=()=>{
        this.setState(()=>this.initialstate)
    }

    submitStockManager(event){
        event.preventDefault();

       const  stockmanager ={
           username:this.state.username,
           password:this.state.password,
           email:this.state.email,
           contactno:this.state.contactno,
       };
        console.log(stockmanager)
       axios.post("http://localhost:5000/stockmanagers/adds",stockmanager)


    }


    registerChange(event){
        this.setState({
            [event.target.name] :event.target.value
        })
    }


    render() {
    return (
        <div>
            <Form onReset={this.resetBlanks} onSubmit={this.submitStockManager} id="Registerformid"  autoComplete="off">
            <Card >


                    <Card.Header> REGISTER STOCK MANAGER</Card.Header>
                <AdminNavBar/>
                <h3>Enter Stock Manager Details</h3>
                    <Form.Row>
                <Form.Group as={Col} controlId="Username">

                    <Form.Control  placeholder="Username" type="text" name="username"
                    value={this.state.username} onChange={this.registerChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicPassword">

                    <Form.Control  placeholder="Password"  type="text" name="password"
                                   value={this.state.password} onChange={this.registerChange}

                    />
                </Form.Group>

                    </Form.Row>
                    <Form.Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Control  placeholder="Enter email"  type="text" name="email"
                                   value={this.state.email} onChange={this.registerChange}
                    />

                </Form.Group>

                <Form.Group as={Col} controlId="ContactNo">

                    <Form.Control  placeholder="Enter ContactNo" type="text" name="contactno"
                                   value={this.state.contactno} onChange={this.registerChange}

                    />
                </Form.Group>
                    </Form.Row>

                    <Card.Footer style={{textAlign:"right"}}>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                        <Button  variant="outline-success" type="reset">
                            RESET
                        </Button>
                    </Card.Footer>


            </Card>
        </Form>
        </div>

    );
}
}
