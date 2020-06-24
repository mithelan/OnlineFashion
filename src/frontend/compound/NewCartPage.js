import React, {Component, useEffect} from 'react';
import axios from 'axios'
import {useDispatch } from "react-redux";
import {getCart} from '../actions/addAction'

function NewCartPage(props) {

const dispatch=useDispatch();
useEffect(()=>{

    let cartItems=[];

    /*if(props.user.userData && props.user.userData.Cart){

        if(props.user.userData.Cart.length>0){
             props.user.userData.Cart.forEach(Cart=>{
                 cartItems.push(Cart.id)

             })

            dispatch(getCart(cartItems,props.user.userData.Cart))
        }
    }*/




},[])




        return (
            <div>

                
            </div>
        );

}

export default NewCartPage;
