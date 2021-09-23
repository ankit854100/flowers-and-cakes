import React from "react";
import {Card,Button,Row,Col,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/c1.jpg';
import img2 from './Images/c2.jpg';
import img3 from './Images/c3.jpg';
import img4 from './Images/c4.jpg';
import img5 from './Images/c5.jpg';
import img6 from './Images/c6.jpg';
import img7 from './Images/img7.jpg';
import img8 from './Images/img8.jpg';

const Cake=()=>{
    return (
        <div>    
          <Container>
            <h1 class="caketag">Best Cakes</h1>
          <Row>
            <Col md={3}>
          <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    <h3><strong>₹ 900</strong></h3>
    </Card.Text>
    <Button variant="primary" class="buy">Buy Now</Button>
    <Button variant="primary" class="cart">Add to Cart</Button>
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
    <Button variant="primary" class="buy">Buy Now</Button>
    <Button variant="primary" class="cart">Add to Cart</Button>
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
    <Button variant="primary" class="buy">Buy Now</Button>
    <Button variant="primary" class="cart" >Add to Cart</Button>
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
    <Button variant="primary" class="buy">Buy Now</Button>
    <Button variant="primary" class="cart" >Add to Cart</Button>
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
    <Button variant="primary" class="buy">Buy Now</Button>
    <Button variant="primary" class="cart" >Add to Cart</Button>
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
    <Button variant="primary" class="buy">Buy Now</Button>
    <Button variant="primary"class="cart" >Add to Cart</Button>
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
    <Button variant="primary" class="buy">Buy Now</Button>
    <Button variant="primary"class="cart" >Add to Cart</Button>
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
    <Button variant="primary" class="buy">Buy Now</Button>
    <Button variant="primary" class="cart" >Add to Cart</Button>
  </Card.Body>
</Card>
</Col>
  </Row></Container>
        </div>
    )
}

export default Cake;