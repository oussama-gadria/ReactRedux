import ProductFunc from './ProductFun';
import { Container ,Row ,Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

function ProductsFunc () {
  const dispatch=useDispatch();
  const [show,setShow] =useState(false);
  const [visible,setVisible] =useState(false);
  const products=useSelector((state)=>state.products.products);
  console.log(products)
  useEffect(()=>
  {
    console.log("products = "+products)
    setVisible(true)
    setTimeout(() =>
    {
      setVisible(false)
  },3000)
  },[]

  )
    const buy = (product) => {
        product.quantity --;
        setShow(true)
        setTimeout(() =>
          {
            setShow(false)
          },1000
        )
       };
    return ( 

        <Container style={{ marginTop: "30px" }}>
      {visible && (
          <Alert variant="success">
            <Alert.Heading>
              Hey, Welcome To Our Shop <strong> MyStore </strong>{" "}
            </Alert.Heading>
            <p>
              Thank you for choosing our store, we hope you enjoy your shopping
              experience!
            </p>
            <hr />
          </Alert>
        )}
        <Row>
          {products.map((product) => (
            <Col md={4}>
              <ProductFunc product={product} buyFunction={buy}></ProductFunc>
            </Col>
          ))}
        </Row>
        {show && (
          <Alert style={{ marginTop: "30px" }} variant="primary">
            
            You bought an Item 
          </Alert>
        )}
      </Container>
     );
}

export default ProductsFunc;