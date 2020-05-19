import React,{Component} from 'react';
import {Form,Button,Card,Tab,Tabs} from 'react-bootstrap';
import {  Panel,Row,FormGroup,Col,FormControl} from 'react-bootstrap';
import { CardBody } from 'reactstrap';

import {doLogin} from './LoginNew'



class LoginForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            pass: ""
        };
    }

    pressEnter(event) {
        if(event.charCode == 13){
            this.doLogin();


        }
    }

    changeUserName(event) {
        let fleldVal = event.target.value;
        this.setState({login: fleldVal, pass : this.state.pass});
    }

    changePass(event) {
        let fleldVal = event.target.value;
        this.setState({pass: fleldVal, login : this.state.login});
    }

    doLogin(props) {
        this.doLogin(this.state.login, this.state.pass)



    }
    doLogin(props) {
        doLogin(this.state.login, this.state.pass)



    }

    render(){
        return(

            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="email"  name="login" onChange={this.changeUserName.bind(this)} onKeyPress={this.pressEnter.bind(this)} className="form-control" placeholder="Email address" required autofocus />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="password"  name="pass" onChange={this.changePass.bind(this)} onKeyPress={this.pressEnter.bind(this)}className="form-control" placeholder="Password" required />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="button" onClick={this.doLogin.bind(this)} >Sign in</button>
                                    <hr className="my-4" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }


}


export default LoginForm;

