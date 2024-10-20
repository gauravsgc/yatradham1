import React from 'react'
import data from './jsondata/Visit.json'
import { Container, Row, Col, Card, Button, Placeholder } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Lastvisit() {
  return (
    <div>
    <h2 className='text-center my-5'> Top Selling packages</h2>
       
    <Container>
    <Row>
      {data.map((item, index) => (
        <Col key={index} md={4} sm={6} className="mb-4">
          <Card className="h-100 d-flex flex-column">
            
            <Card.Img variant="top" src={item.imagePath} alt={item.title} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Title className='fw-bold text-danger' >{item.price}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Link to={`/Itenary/${item.Params}`}><Button variant="primary"  >More Information</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  </div>
  )
}
