import Product from "./Product";
import products from "../products.json";
import { Alert, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
class Products extends Component {
  state = {
    show: false,
    visible: false,
  };
  Buy = (product) => {
    product.quantity--;
    console.log(product.quantity);
    this.setState({
      show: true,
    });
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 1000);
  };
  componentDidMount = () => {
    console.log(products)
    this.setState({
      visible: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
      });
    }, 3000);
  };
  componentDidUpdate=()=>
  {
    console.log('component updated'); 
  }
  render() {
    return (
      <Container style={{ marginTop: "30px" }}>
        {this.state.visible && (
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
              <Product product={product} parentBuy={this.Buy}></Product>
            </Col>
          ))}
        </Row>
        {this.state.show && (
          <Alert style={{ marginTop: "30px" }} variant="primary">
            
            You bought an Item 
          </Alert>
        )}
      </Container>
    );
  }
}
export default Products;
