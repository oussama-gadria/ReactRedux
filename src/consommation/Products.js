
import { useEffect, useState } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import {deleteProduct, getallProducts} from "../services/api"
import Product from './Product';
function Products() {
  const [products,setProducts] = useState([]);
  const [show,setShow] =useState(false);
  const [visible,setVisible] =useState(false);
  useEffect(() => {
    getProducts(); 
}, [])


const getProducts = async () => {
    const response = await getallProducts();
    console.log(response);
    setProducts(response.data);
}
const deleteProd = async (id) => {
  const result = window.confirm("Are you sure you want to delete?");
if (result) {
  await deleteProduct(id);
  getProducts(); }
}
  useEffect(()=>
  {
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
              <Product product={product} buyFunction={buy} deleteProd={deleteProd}></Product>
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

export default Products;