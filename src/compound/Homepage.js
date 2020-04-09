
import React,{useState} from 'react';
import tshirt1 from '../img/1.jpg';
import tshirt2 from '../img/2.jpg';
import tshirt3 from '../img/3.jpg';
import tshirt4 from '../img/4.jpg';
import '../App.css'
import {connect} from 'react-redux';
import {addCart} from "../actions/addAction";


const Homep= (prop) =>{
    console.log(prop);

    return(

<div className='container1'>

<div className='image'>

    <img src={tshirt4} alt='' height='200px' width='150px' />
    <h3>Grey</h3>
    <h3>1550.00</h3>
    <a onClick={prop.addCart} className='addtocart cart4' href='#'>Add to cart</a>
</div>

    <div className='image'>

        <img src={tshirt1} alt=''  height='200px' width='150px' />
        <h3>Grey</h3>
        <h3>1550.00</h3>
        <a onClick={prop.addCart}  className='addtocart cart1' href='#'>Add to cart</a>
    </div>


    <div className='image'>

        <img src={tshirt2}alt=''  height='200px' width='150px' />
        <h3>Grey</h3>
        <h3>1550.00</h3>
        <a onClick={prop.addCart} className='addtocart cart2' href='#'>Add to cart</a>
    </div>


    <div className='image'>

        <img src={tshirt3} alt=''  height='200px' width='150px' />
        <h3>Grey</h3>
        <h3>1550.00</h3>
        <a onClick={prop.addCart} className='addtocart cart3' href='#'>Add to cart</a>
    </div>

</div>

    );

}

export default connect(null,{addCart})(Homep);