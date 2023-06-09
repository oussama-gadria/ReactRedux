import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import products from "../products.json";
 

function ProductDetails() {
    const {name,like} = useParams();
    
   const product = products.find((product)=>product.name === name);
   //console.log(product.img)
   // <h1> ProductDetails {name}</h1>  
  return (

<Container style={{ marginTop: "30px" }}>
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={"../assets/" + product.img}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
          <Row>
          <Col md={12}>
            <h1>{product.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Description</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>
            {product.description}
            </p>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Price</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.price} DT</p>

            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Likes</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{like}</p>
            </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    
  )
}

export default ProductDetails