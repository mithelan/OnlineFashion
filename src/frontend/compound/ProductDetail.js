import React, {Component, Fragment, useEffect, useState} from 'react';
import Axios from 'axios';
import { addToCart} from '../actions/addAction';
import {connect, useDispatch} from "react-redux";
import {Card, Row, Col, Button, Navbar} from "react-bootstrap";
import '../App.css'
import {FormGroup, Input, Label} from "reactstrap";
import Comment from "./Comment";
import {addcart} from "../actions/addAction";
import axios from 'axios'
import {TokenStorage as localstorage} from "@uppy/companion-client";

import {FaStar} from 'react-icons/fa'
import Page from "react-page-loading";


function ProductDetail(props) {
    const [comments, SetComments]=useState();

    const [user]=useState();
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);
    const productId = props.match.params.productsId
    const [Product, setProduct] = useState([])
    const [Products, setProducts] = useState([]);

    //FOR RATING
    const [rating, SetRate]=useState();

    const [ratings,setRating] = useState(null);
    const [hover,setHover]= useState(null);



    const [Items, setItems] = useState([])
    // const [state, setState] = useState(initialState);

    useEffect(() => {
        Axios.get(`https://backend77.herokuapp.com/products/products_by_id?id=${productId}&type=single`)
            .then(response => {

                setProduct(response.data[0])


                console.log(response.data[0])
            })
    }, [])



    const addToCardFunction = () => {
        props.history.push("/cartpage/"+productId+"?qty="+qty)
        console.log("pri",productId)
    }

    useEffect(() => {
        Axios.get("https://backend77.herokuapp.com/products/getProducts/"+productId).then((response) => {

            //products same name as routes
            setProducts(response.data.products);


        });
    }, []);




    /* const addToCardNEW=(e)=>{
         //dispatch(addcart(productId));

         e.preventDefault();

         //  const comment = {comments};

         const token=localStorage.getItem('token')
         Axios.post(
             "http://localhost:5000/api/auth/addToCart/" + productId,
             "",{

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

 */






    const submit =(e) => {


        const comment = {comments};

        const token=localStorage.getItem('token')
        Axios.post(
            "http://localhost:5000/products/comments/" + productId,
            comment,{

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


    const submitRate =(e) => {


        const rates = {rating};

        const token=localStorage.getItem('token')
        Axios.post(
            "http://localhost:5000/products/rate/" + productId,
            rates,{

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



    function namemethod(){

        if(localStorage.length !== 0){
            return(
                <div className="form-group row">




                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <h5>Comment here</h5>
                            <textarea
                                type="text"
                                placeholder='Type a comment...'
                                className="form-control"
                                rows="3"
                                onChange={(e) => SetComments(e.target.value)}
                            />


                        <div className='buttonalign'>
                            <button  type="submit" className="btn btn-warning" >
                                Send
                            </button></div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='nie'>
                <a  className="text-primary" href='/Login'>Login to Comment</a>
                </div>
            )

        }

    }




    //CHECK LOGIN FOR START RATING
    function isLoginnedForRating() {
        if (localStorage.length !== 0) {
            return (
                <div>
                    <h6>Rate Products</h6>
                    {/*short hand for array with five untitled items in it.*/}
                    {[...Array(5)].map((star, i) => {
                        const ratValue = i + 1;
                        return (
                            <div>
                                <div>
                                    <label>
                                        <input style={{display: "none"}}
                                               type="radio"
                                               name='ratings'
                                               value={ratValue}
                                               onClick={() => setRating(ratValue)}
                                               onChange={(e) => SetRate(e.target.value)}

                                        />

                                        <FaStar style={{cursor: "pointer"}}
                                                color={ratValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                onMouseEnter={() => setHover(ratValue)}
                                                onMouseLeave={() => setHover(null)}

                                        />

                                    </label>
                                </div>
                                <button  type="submit" className="btn btn-warning" >
                                    Select
                                </button>
                            </div>


                        )
                    })}

                </div>

            )
        }
    }

    /*    const rendercard = Products.map((products, productId) => {

            return<div>
                {products.Review.map((item,productId)=>{
                    return(
                        <div>
                            {item.comments}
                        </div>
                    )
                })}
            </div>
        })*/

    return (
        <div>
            <Page loader={"bar"} color={"#A9A9A9"} size={6}   >
            <div className="details">
                <div className="details-image">
                    <img  className="product-view" src={`/images/productPhotos/${Product.filename}`}
                          height="500"
                           width="180"      data-zoom-image={`/images/productPhotos/${Product.filename}`}/>




                </div>







                <div className="details-info">


                    <h2 className="box-title"> {Product.brand}</h2>

                    <p className="box-title"> {Product.description}</p>
                    <h3 className="box-price">
                        Rs .{Product.price}

                    </h3>
                </div>

                <div className="details-action">
                    <ul>




                        <ol>{Product.description}</ol>

                        <br></br>
                        <ol>

                            Availablity : {Product.quantity>0 ?<div className='text-success'>In Stock </div>: <div className='text-danger'>Sorry this stock is currently unavailable</div>}
                        </ol>      <br></br>



                        Quantity: <select
                        value={qty} onChange={(e) => { setQty(e.target.value) }}>
                        {[...Array(Product.quantity).keys()].map(x =>
                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                        )}
                    </select>

                        <ol>
                            <h3>Price:
                                {Product.price*qty}
                            </h3>
                        </ol>
                        <div className="col">
                        </div>

                        <ol>
                            <br></br>
                            {Product.quantity >0 && <a href="#" className="btn btn-danger" onClick={addToCardFunction}>
                                Add to cart
                            </a>}
                            <button type="button" className="btn btn-light" onClick={`/products/AddToWish/${productId}`}>Add to WishList</button>
                        </ol>



                    </ul>

                </div>
            </div>


            <br></br>



                <form onSubmit={submitRate}>
                    <div className="ratee">{isLoginnedForRating()}   </div>
                </form>



            <div className="container">
                <div className="row d-flex mb-5 contact-info">
                    <div className="w-100"></div>


                </div>
            </div>

            <form onSubmit={submit}>
                <div className='Arrange'>
                    <div className="row">
                        <div className="col-md-5">
                            <br/>
                            {namemethod()}

                            <div className="form-group row">

                            </div>
                        </div>

                    </div>
                </div>
            </form>
            </Page>

        </div>


    );








}

export default connect(null,)(ProductDetail);
