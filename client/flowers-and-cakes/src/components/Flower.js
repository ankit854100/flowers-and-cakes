import React from "react";
import {Card,Button,Row,Col,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/f1.jpg';
import img2 from './Images/f2.jpg';
import img3 from './Images/f3.jpg';
import img4 from './Images/f4.jpg';
import img5 from './Images/f5.jpg';
import img6 from './Images/f6.jpg';
import img7 from './Images/f7.jpg';
import img8 from './Images/f8.jpg';

const Flower=()=>{
    return (
        <div>
          <Container>
            <h1 class="caketag">Best Flowers</h1>
          <Row>
            <Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h3><strong>₹ 900</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buyf">Buy Now</Button>
    <Button variant="primary" class="cartf">Add to Cart</Button>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img2} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h3><strong>₹ 450</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buyf">Buy Now</Button>
    <Button variant="primary" class="cartf">Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
<Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h3><strong>₹ 500</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buyf">Buy Now</Button>
    <Button variant="primary"class="cartf" >Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
<Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img4} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h3><strong>₹ 600</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buyf">Buy Now</Button>
    <Button variant="primary" class="cartf" >Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
</Row>
<Row>
<Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img5} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      <h3><strong>₹ 800</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buyf">Buy Now</Button>
    <Button variant="primary" class="cartf" >Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
<Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img6} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h3><strong>₹ 750</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buyf">Buy Now</Button>
    <Button variant="primary"class="cartf" >Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
<Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img7} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h3><strong>₹ 900</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buyf">Buy Now</Button>
    <Button variant="primary"class="cartf" >Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
<Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img8} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h3><strong>₹ 650</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buyf">Buy Now</Button>
    <Button variant="primary" class="cartf" >Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
  </Row></Container>
        </div>
    )
}

export default Flower;