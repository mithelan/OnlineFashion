import React, {Component, useEffect} from 'react';
import {addtocartnew,removeFromCart} from "../actions/addAction";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Cartpage(props) {

    const cart=useSelector(state=>state.cart);


    const{cartItems}=cart;


    const productId=props.match.params.id;
    const qty=props.location.search.search? Number(props.location.search.split('=')[1]):1;

    const dispatch=useDispatch();

    const removeCartItem = (productId) => {
        dispatch(removeFromCart(productId));
    }


    const checkOutFunction = () => {
        let payload=localStorage.getItem("token")
        if(localStorage.length !== 0){
            props.history.push('/checkout')





        }else{
            props.history.push('/login?redirect=payment')

        }
    }

    useEffect(()=>{

        if(productId){
            dispatch(addtocartnew(productId,qty));
        }
    },[])





    return (
        <div>
            <div className="cart">
                <div className="cart-list">
                    <ul className="cart-list-container">
                        <li>
                            <h3>
                                Shopping Cart
                            </h3>
                            <div>
                                Price
                            </div>
                        </li>
                        {
                            cartItems.length === 0 ?
                                <div>
                                    Cart is empty
                                </div>
                                :
                                cartItems.map(item =>
                                    <li>
                                        <div className="cart-image">
                                            <img src={`/images/productPhotos/${item.filename}`}alt="product" />
                                        </div>
                                        <div className="cart-name">

                                            <Link to={"/products/" + item.product}>
                                                {item.category}
                                            </Link>

                                        </div>

                                        <div className='selected' >
                                            Selected Number of products :
                                            <select className='dropdown' value={item.qty} onChange={(e) => dispatch(addtocartnew(item.product, e.target.value))}>
                                                {[...Array(item.quantity).keys()].map(x =>
                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                )}
                                            </select>




                                            <button type="button" className="btn btn-danger"  onClick={() => removeCartItem(item.product)} >
                                                Delete
                                            </button>
                                        </div>
                                        <div className="cart-price">
                                            Rs.{item.price* item.qty}
                                        </div>


                                    </li>
                                )
                        }
                    </ul>

                </div>

            </div>

            <div className="cart-action">
                <h3>

                    Total  :
                    Rs.{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3>
                <button onClick={checkOutFunction} className="btn btn-warning">
                    Proceed to Checkout
                </button>

            </div>

        </div>


    );

}

export default Cartpage;
