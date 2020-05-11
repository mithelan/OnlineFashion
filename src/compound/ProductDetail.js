import React, {Component, useEffect, useState} from 'react';
import Axios from 'axios';


import {Card,Row,Col,Button} from "react-bootstrap";
function ProductDetail(props){


    const productsId=props.match.params.productsId
    const [Product,setProduct]=useState([])

 useEffect(()=>{
      Axios.get(`http://localhost:5000/products/products_by_id?id=${productsId}&type=single`)
          .then(response=>{

              setProduct(response.data[0])

              console.log(response.data[0])
          })
 },[])

        return (
            <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>{Product.title}</h1>
                </div>

                <br />

                <Row gutter={[16, 16]} >
                    <Col lg={12} xs={24}>
                        <img
                            src={`/images/productPhotos/${Product.filename}`}
                            height="180"
                            width="180"
                        />
                    </Col>
                    <Col lg={12} xs={24}>
                        {Product.description}

                    </Col>
                </Row>
            </div>
        );

}

export default ProductDetail;
