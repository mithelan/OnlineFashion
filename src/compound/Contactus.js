import React, {Component} from 'react';
import axios from 'axios';

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
            .then(res=>console.log(res.data));

       // window.location = '/';
    }

    render() {
        return (
            <div>
                <h1>Contact us</h1>


                <form onSubmit={this.onSubmit}>
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
                                <label className="col-sm-2 col-form-label">Phone</label>
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
                                        type="text"
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        onChange={this.onChangeComments}
                                        value={this.state.comments}

                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-dark  float-right ">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>


            </div>
        );
    }
}

export default Contactus;
