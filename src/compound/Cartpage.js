import React, {Component, useEffect} from 'react';
import {addtocartnew} from "../actions/addAction";
import {useDispatch, useSelector} from "react-redux";

function Cartpage(props) {

    const cart=useSelector(state=>state.cart);


    const{cartItems}=cart;


    const productId=props.match.params.id;
    const qty=props.location.search.search? Number(props.location.search.split('=')[1]):1;

    const dispatch=useDispatch();
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
                                                <div>


                                                </div>

                                            </div>
                                            <div className="cart-price">
                                                Rs.{item.price * item.qty}
                                            </div>

                                            {item.qty}
                                        </li>
                                    )
                            }
                        </ul>

                    </div>


                </div>





            </div>
        );

}

export default Cartpage;
