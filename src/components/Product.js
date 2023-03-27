import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { Component } from "react";
class ProductLike extends Component {
  constructor(props) {
    super(props);
    //this.state = {product: this.props.product}
  }

  state = {
    product: this.props.product,
  };


  addlike = (e) => {
    e.preventDefault();
    this.setState({
      product: { ...this.state.product, like: this.state.product.like + 1 },
    });
  };
  addItem = (e) => {
    e.preventDefault();
    this.props.parentBuy();
  };
  render() {
    return (
      <Card
        style={{ width: "18rem" }}
        className="text-center"
        border="secondary"
      >
        <Card.Header>
          <Card.Img
            variant="top"
            src={"../assets/" + this.state.product.img}
            alt="Product Img"
            height={200}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.state.product.title}</Card.Title>
          <Card.Text>Quantity: {this.state.product.quantity} </Card.Text>
          <Card.Text> Price : {this.state.product.price}dt </Card.Text>
          <Card.Text>Like : {this.state.product.like}</Card.Text>
          <Row>
            <Col md={6}>
            {" "}
              <Button variant="primary" onClick={this.addlike}>
                Like
              </Button>
            </Col>
            <Col md={6}>
              <Button
                variant="info"
                onClick={() => this.props.parentBuy(this.state.product)}
                disabled={this.state.product.quantity === 0}
              >
                Buy
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
export default ProductLike;
