import React, {Component, useEffect, useState} from 'react';
import axios from 'axios'
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";


function Profile(props){

    const [email, SetEmail]=useState();
    const [name, SetName]=useState();
    const [Person, setPerson]=useState([]);
    const [Persons, setPersons]=useState([]);



    useEffect(() => {
        axios.get("http://localhost:5000/api/auth/userid",
            {

                headers:{
                    "x-auth-token":localStorage.getItem("token"),
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }

            }

        ).then((response) => {
            if (response.data.success) {

                //products same name as routes
                setPerson(response.data.us);

                console.log(response.data.us);
            } else {
                alert("Failed");
            }
        })
    }, []);



    const submit =(e) => {

        e.preventDefault();
        const info = {email};

        const token=localStorage.getItem('token')
        axios.put(
            "http://localhost:5000/api/auth/updateuser",
            info,{

                headers:{
                    "x-auth-token":localStorage.getItem("token"),
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }

            }
        ).then(response=>{
            console.log(response.data)

        })
        console.log('success');

    };


    const deleteme =(e) => {



        const token=localStorage.getItem('token')
        axios.delete(
            "http://localhost:5000/api/auth/delete",
         {

                headers:{
                    "x-auth-token":localStorage.getItem("token"),
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }

            }
        ).then(response=>{
            console.log(response.data)

            localStorage.clear();

        })
        console.log('success');

    };


        return (
            <div>
                <h2>Profile</h2>
          <div className='emailar'>
                <h3>Email  <p>{Person.email}</p></h3>
                <h3>Name  <p>  {Person.name}</p></h3>

          </div>



                    <button type="button" className="emailar btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                       Edit User
                    </button>
                    <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">

                                    <h5 className="modal-title" id="exampleModalLongTitle">Are you sure you want to delete the account</h5>

                                </div>
                                <div className="modal-body">
                                    <form onSubmit={submit}>
                           Email: <input
                                type="email"

                                className="form-control"
                                rows="3"
                                onChange={(e) => SetEmail(e.target.value)}
                            />

                    <div className='buttonalign'>
                    <button  type="submit" className="btn btn-warning" >
                        Update
                    </button>
                    </div>
                </form>
                                </div>
                            </div>
                        </div>
                    </div>









<div className='take'>
    <h3>Delete your account here</h3>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalLong">
                    Delete User
                </button>
                <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">

                                <h5 className="modal-title" id="exampleModalLongTitle">Are you sure you want to delete the account</h5>

                            </div>
                            <div className="modal-body">

                                <form onSubmit={deleteme}>

                                    <button type="button" className="btn btn-success" data-dismiss="modal" aria-label="Close">
                                       Cancel <span aria-hidden="true">&times;</span>
                                    </button>

                                    <button  type="submit" className="btn btn-warning" >
                                        Delete Account
                                    </button>

                                </form>


</div>
                            </div>
</div>
                                        </div>
</div>

            </div>
        );

}
export default Profile
