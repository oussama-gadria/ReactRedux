
import ProductFunc from '../consommation/ProductFun';
import { Container ,Row ,Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { getallProducts } from './../services/api';
 
function ProductsFunc () {
  const [show,setShow] =useState(false);
  const [visible,setVisible] =useState(false);
  const [products,setProducts] = useState([]);
//getproducts
 useEffect(() => {
    getProducts(); 
}, [])

const getProducts = async () => {
    const response = await getallProducts();
    console.log(response);
    setProducts(response.data);
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