import React, {Component} from 'react';
import axios from 'axios';
import "../App.css";
import {Alert} from 'reactstrap'


class Contactus extends Component {

    constructor(props) {
        super();

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeComments = this.onChangeComments.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            phone: '',
            email: '',
            comments: ''

        }
    }

    componentDidMount() {
    axios.get('http://localhost:5000/contactus/add')
        .then(response =>{
            if(response.data.length>0){
                this.setState({

                    name:'amam'

                })
            }

        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeComments(e) {
        this.setState({
            comments: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const contact = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            comments: this.state.comments,

        }
        console.log(contact);

        axios.post('http://localhost:5000/contactus/add',contact)
            .then(res=>
           alert('Thank you! We will contact you soon with your email address')
            )
        .catch((err) => {

            alert("Pleas Add again")

        })
    }

    render() {
        return (
            <div>

                <h1>Contact us</h1>
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="w-100"></div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-light
 p-4">
                                <p><span>Address:</span> 87 7/5 Galle Road Colombo-06</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-light p-4">
                                <p><span>Phone:</span> <a href="tel://0777885111">0777885111</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-light p-4">
                                <p><span>Email:</span> <a href="mailto:info@donut.com">info@donut.com</a></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-light p-4">
                                <p><span>Buy the Products You Love</span></p>
                            </div>
                        </div>
                    </div>

                <form onSubmit={this.onSubmit}>
                    <div className='ArrangeContact'>
                    <div className="row">
                        <div className="col-md-5">

                            <br/>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input

                                        type="text"
                                        required
                                        onChange={this.onChangeName}
                                        value={this.state.name}
                                        className="form-control"
                                    />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Subject</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        required
                                        onChange={this.onChangePhone}
                                        value={this.state.phone}
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input
                                        type="email"
                                        required
                                        onChange={this.onChangeEmail}
                                        value={this.state.email}
                                        className="form-control"
                                    />
                                </div>
                            </div>


                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Comments </label>
                                <div className="col-sm-10">

                                    <textarea
                                        type="text"
                                        className="form-control"
                                        required
                                        onChange={this.onChangeComments}
                                        value={this.state.comments}

                                    />
                                </div>
                            </div>

                            <div className="form-group row-size">
                                <div className="col-sm-16">
                                    <button  type="submit" className="btn btn-dark float-md" data-toggle="modal" href="#ignismyModal">
                                         Send
                                    </button>



                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </form>

                </div>


                <footer className="ftco-footer bg-dark ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="mouse">
                                <a href="#" className="mouse-icon">
                                    <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
                                </a>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="text-info">Fashion Me</h2>
                                    <p className="text-light bg-dark">We give the best products in the market.</p>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a>
                                        </li>
                                        <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a>
                                        </li>
                                        <li className="ftco-animate"><a href="#"><span
                                            className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4 ml-md-5">
                                    <h2 className="text-info">Menu</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="py-2 d-block">Shop</a></li>
                                        <li><a href="#" className="py-2 d-block">About</a></li>
                                        <li><a href="#" className="py-2 d-block">Profile</a></li>
                                        <li><a href="/Contactus" className="py-2 d-block">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="text-info">Help</h2>
                                    <div className="d-flex">
                                        <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">


                                        </ul>
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="py-2 d-block">Returns &amp; Exchange</a></li>
                                            <li><a href="#" className="py-2 d-block">Terms &amp; Conditions</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="ftco-footer-widget mb-4">
                                    <h2 className="text-info">Have a Question?</h2>
                                    <div className="block-23 mb-3">
                                        <ul>

                                            <li><a href="#"><span className="icon icon-phone"></span><span
                                                className="text">0777885111</span></a></li>
                                            <li><a href="#"><span className="icon icon-envelope"></span><span
                                                className="text">info@donut.com</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">

                                <p>
                                    <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | FASHION ME <i
                                    className="icon-heart color-danger" aria-hidden="true"></i>

                                </p>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>
        );
    }
}

export default Contactus;
