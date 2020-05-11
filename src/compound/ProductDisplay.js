import React, {Component, useEffect, useState} from 'react';
import Axios from "axios";
import {Card,Row,Col,Button} from "react-bootstrap";
import {CardBody} from "react-bootstrap/Card";




function ProductDisplay()  {

    const [Products,setProducts]=useState([]);

    useEffect(()=>{

        Axios.get('http://localhost:5000/products/getProducts')
            .then(response=>{
                if(response.data.success){
//products same name as route
                    setProducts(response.data.products);

                    console.log(response.data.products);
                }
                else{
                    alert('Failed');
                }
            })
    },[])

const rendercard=Products.map((products,index)=>{

    return <Card style={{ width: '18rem', height:'20rem' }}>
        <Card.Img variant="top" src={`/images/productPhotos/${products.filename}`}
                  height="180"
                  width="180"

        />
            <Card.Body>

                <Card.Title>{products.title}</Card.Title>
                <Card.Title>{`Rs.${products.price}`}   </Card.Title>

                <Button variant="primary" a href={`/products/${products._id}`}>Buy now</Button>
            </Card.Body>

        </Card>

})

        return (
            <div style={{ width: '75%', margin: '3rem auto' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2>  Shop Now  </h2>
                </div>

                <div>
                    <Row gutter={[16, 16]}>

                        {rendercard}

                    </Row>


                </div>


            </div>
        );

}

export default ProductDisplay;
