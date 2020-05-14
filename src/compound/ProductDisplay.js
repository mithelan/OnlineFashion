import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";
import { CardBody } from "react-bootstrap/Card";

function ProductDisplay() {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/products/getProducts").then((response) => {
      if (response.data.success) {
        //products same name as route
        setProducts(response.data.products);

        console.log(response.data.products);
      } else {
        alert("Failed");
      }
    });
  }, []);

  const rendercard = Products.map((products, index) => {
    return (
      <Card
        style={{ width: "18rem", height: "20rem", backgroundColor: "#dddbc2" }}
      >
        <Card.Img
          variant="top"
          src={`/images/productPhotos/${products.filename}`}
          height="234"
          width="180"
        />
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Title>{`Rs.${products.price}`} </Card.Title>

          <Button variant="primary" a href={`/products/${products._id}`}>
            Buy now
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <div style={{ width: "75%", margin: "3rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <h2> Shop Now </h2>
        </div>

        <div>
          <Row gutter={[16, 16]}>{rendercard}</Row>
        </div>
      </div>

      <footer className="ftco-footer bg-dark ftco-section">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel">
                  <span className="ion-ios-arrow-up"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="text-info">Fashion Me</h2>
                <p className="text-light bg-dark">
                  We give the best products in the market.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="text-info">Menu</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="py-2 d-block">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="py-2 d-block">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="/Contactus" className="py-2 d-block">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="text-info">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4"></ul>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="py-2 d-block">
                        Returns &amp; Exchange
                      </a>
                    </li>
                    <li>
                      <a href="#" className="py-2 d-block">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="text-info">Have a Question?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">0777885111</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">info@donut.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | FASHION ME{" "}
                <i className="icon-heart color-danger" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProductDisplay;
