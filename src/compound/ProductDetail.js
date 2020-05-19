import React, {Component, useEffect, useState} from 'react';
import Axios from 'axios';
import { addToCart} from '../actions/addAction';
import {connect, useDispatch} from "react-redux";
import {Card, Row, Col, Button} from "react-bootstrap";
import StarRating  from "./StarRating";



function ProductDetail(props) {

    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);
    const productsId = props.match.params.productsId
    const [Product, setProduct] = useState([])

    useEffect(() => {
        Axios.get(`http://localhost:5000/products/products_by_id?id=${productsId}&type=single`)
            .then(response => {

                setProduct(response.data[0])

                console.log(response.data[0])
            })
    }, [])



    const addToCardFunction = () => {
       props.history.push("/cartpage/"+productsId+"?qty="+qty)
    }

    return (

        <div>

            <section className="products-detail-section pt_large pb_large">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-12 mb-4 mb-sm-5 mb-lg-0">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="product-image">
                                        <img className="product_img" src={`/images/productPhotos/${Product.filename}`}
                                             data-zoom-image={`/images/productPhotos/${Product.filename}`}/>
                                    </div>
                                    <div className="quickview-product-detail">
                                        <h2 className="box-title"> {Product.title}</h2>
                                        <h3 className="box-price">
                                            Rs .{Product.price}

                                        </h3>
                                        <StarRating/>
                                        <p className="box-text"></p>

                                        <div className="quantity-box">
                                        </div>
                                    </div>



                                </div>
                                <div className="product-right">
                                    <h4>Description</h4>
                                    <h6>{Product.description}</h6>


                                    Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                    {[...Array(Product.quantity).keys()].map(x =>
                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    )}
                                </select>





                                    {Product.quantity >0 && <a href="#" className="btn btn-danger" onClick={addToCardFunction}>
                                        Add to cart
                                    </a>}


                                    <div className='review'>
                                        <h4>Add a review</h4>
                                        <div className="tab-caption">
                                            <div className="costomer-reviews">
                                                <div className="costomer-reviews-box">
                                                    <div className="reviews-img">
                                                        <img src="image/costomer-img.jpg" alt="costomer-img"/>
                                                    </div>
                                                    <div className="reviews-text">
                                                        <p className="reviewer-name">admin</p>
                                                        <span className="reviews-date">September 13, 2017</span>
                                                        <p className="reviewer-text">24/7 helpdesk is also available. I
                                                            Love it!</p>
                                                    </div>
                                                </div>
                                                <div className="costomer-reviews-box">
                                                    <div className="reviews-img">
                                                        <img src="image/costomer-img.jpg" alt="costomer-img"/>
                                                    </div>
                                                    <div className="reviews-text">
                                                        <p className="reviewer-name">admin</p>
                                                        <span className="reviews-date">September 13, 2017</span>
                                                        <p className="reviewer-text">24/7 helpdesk is also available. I
                                                            Love it!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        <div className="tab-caption">
                                            <div className="add-review">
                                                <div className="tab-title">
                                                    <h6>Add a review</h6>
                                                </div>
                                                <form className="add-review-form">
                                                    <div className="input-1">
                                                        <input required className="form-control"
                                                               placeholder="Enter Your Name" value="" type="text"/>
                                                    </div>
                                                    <div className="input-2">
                                                        <input required className="form-control"
                                                               placeholder="Enter Your Email" value="" type="email"/>
                                                    </div>
                                                    <div className="input-3">
                                                        <textarea required rows="6" className="form-control"
                                                                  placeholder="Enter Your Review"></textarea>
                                                    </div>
                                                    <div className="input-btn">
                                                        <button type="submit" className="btn btn-secondary">Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>

                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );

}

export default connect(null,)(ProductDetail);
