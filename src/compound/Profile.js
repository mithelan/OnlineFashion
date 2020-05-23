import React, {Component} from 'react';
import axios from 'axios'
import {Card} from "react-bootstrap";

class Profile extends Component {
    constructor(props) {
        super(props);





        this.state={
            name:'',
            email:'',
            password:'',
            newemail:''
        };

    }


    componentDidMount() {
        this.getUser();
    }


    getUser=()=>{
        axios.get('http://localhost:5000/api/auth/user',

            {

                headers:{
                    "x-auth-token":localStorage.getItem("token"),
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }

            }



        )

            .then((response)=>{
                const data=response.data;
                this.setState({email:data.email})
                console.log('data recieve'+ this.state.email);
            })
            .catch(()=>{
                alert('error')
            })

    }


    setEmail(event) {
        this.setState({
            newemail : event.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>Profile </h1>

                Email:   <input type="text" value={this.state.email} onChange={this.setEmail}></input>




                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#exampleModalLong">
                    Edit Here
                </button>
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">

                                <h5 className="modal-title" id="exampleModalLongTitle">Reviews</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">



                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;
