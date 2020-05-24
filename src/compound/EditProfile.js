import React, { Component } from 'react';
import axios from 'axios';



export default class EditProfile extends Component {

    constructor(props) {
        super(props);


        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.onChange = this.onChange.bind(this);


        this.state = {

            email:''


        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/auth/user'+ this.props.match.params.id)
            .then(res => {
                this.setState({
                    email: res.data.email
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }



    onSubmit(e) {
        e.preventDefault();
        const Update = {
            email: this.state.email
        };



        // console.log(Stock);
        window.location = '/';

        axios.post('http://localhost:5000/api/auth/updateuser/' +this.props.match.params.id, Update)
            .then(res => console.log(res.data));
    }

    render() {
        return (

            <div className={"container"} style={{width:'40.4rem',height:'41rem'}} >
                <br/>
                <div className={"row"}>
                    <div className={"col-md-6 mt-5 mx-auto"} >
                        <h1 className={"h3 mb-3 font-weight-normal"} align={"center"}><b><i>EDIT STAFF</i></b></h1>
                        <form onSubmit={this.onSubmit}>


                            <div className="form-group">
                                <label>Email: </label>
                                <input  type="email"
                                        required
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                />
                            </div>


                            <div className="form-group">
                                <input type="submit" value="Edit Staff" className="btn btn-primary" />
                            </div>
                            <br/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
