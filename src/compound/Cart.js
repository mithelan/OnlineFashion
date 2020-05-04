import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import '../App.css'
import {productQuantity,deleteproducts} from '../actions/productQuantity'
import tshirt1 from '../img/1.jpg';
import tshirt2 from '../img/2.jpg';
import tshirt3 from '../img/3.jpg';
import tshirt4 from '../img/4.jpg';
import {deletecart} from "../actions/deleteAction";

function Cart({cartProps,productQuantity,deleteproducts}) {

    console.log(cartProps);

    let productsInCart = [];

    Object.keys(cartProps.products).forEach(function (item) {
        console.log(item);

        if (cartProps.products[item].inCart) {
            productsInCart.push(cartProps.products[item])
        }
        console.log(productsInCart);

    })

    //const productImages = [tshirt1, tshirt2, tshirt3, tshirt4]

    const productImages=(product)=> {

        if (product.referenceName === 'blackTshirt') {
            return tshirt4;
        } else if (product.referenceName === 'WhiteTshirt') {
            return tshirt2;
        } else if (product.referenceName === 'blueTshirt') {
            return tshirt3;
        } else if (product.referenceName === 'blacklongTshirt'){
            return tshirt1;
    }
        }


    productsInCart = productsInCart.map((product, index) => {
        console.log('product name is');
        console.log(product);
        return (
<Fragment key={index}>

                <div className='product'><ion-icon onClick={() => deleteproducts(product.referenceName)} name="close-circle"/>
                    <img src={productImages(product)}/>
                    <span className='sm-hide'>{product.name}</span>

                    <div className='price sm-hide'>Rs {product.price}</div>
                    <div className='quantity'>
                        <ion-icon onClick={() => productQuantity('decrease', product.referenceName)} className='decrease'    name="arrow-back-circle-outline"/>
                        <span>{product.numbers}</span>
                        <ion-icon className='increase' onClick={() => productQuantity('increase', product.referenceName)} name="arrow-forward-circle-outline"/>

                    </div>
                    <div className='total'>Rs{product.numbers * product.price}.00</div>
                </div>
</Fragment>

        )
    });


    return (
        <div className='container-products'>
            <div className='product-header'>
                <h5 className='product-title'>Product Name</h5>
                <h5 className='price sm-hide'>Price</h5>
                <h5 className='quantity'>Quantity</h5>
                <h5 className='total'>Total</h5>
            </div>
            <div className='products'>
                {productsInCart}
            </div>
            <div className='basketTotalContainer'>
                <h4 className='basketTotalTitle'>Cart Total</h4>
                <h4 className='basketTotal'>{cartProps.cartCost}.00</h4>
            </div>
            <button class='submit' >Check out</button>

        </div>
    );
}

const mapStateToProps = state => ({
    cartProps: state.cartState

});


export default connect(mapStateToProps,{productQuantity,deleteproducts})(Cart);


