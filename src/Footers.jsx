import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Footers() {
  return (
    <div className="footerse">
        <Container>
            <Row className=''>
                <Col md={4} sm={12}>
                
                <address>
                 <h3 style={{lineHeight:'20px'}}>
                Sewa samiti </h3>
                <p>[जीवन का एक अनोखा अनुभव]</p>
                
                </address>
                </Col>
               <Col md={4} sm={12}>
               <p>Rajpur Rd, behind ICICI Bank, opp. Gandhi Park, Main Gate, Dehradun, Uttarakhand 248001</p>
               </Col>
               <Col md={4} sm={12}  style={{display:'flex',justifyContent:'flex-end'}}>
               <p style={{lineHeight:'8px'}}>70602 31050 sewa.samiti48@gmail.com</p>
               </Col>
                {/* <Col md={3} sm={12}>
                <h3>Company</h3>
                <ul>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    
                </ul>
                </Col> */}
                {/* <Col md={3} sm={12}>
                <h3>Popular destination</h3>
                <ul class="two_col">
                <li href="#">link</li>
                    <li href="#">link</li>
                    </p>
               <p><li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                    <li href="#">link</li>
                   
                </ul>
                </Col> */}
                {/* <Col md={3} sm={12}>
                <h3>Instagram</h3>
                <div className="footerimg">
                    <img src="./src/assets/card/cc1.jpg" alt="" />
                    <img src="./src/assets/card/cc2.jpg" alt="" />
                    <img src="./src/assets/card/cc3.jpg" alt="" />
                    <img src="./src/assets/card/cc4.jpg" alt="" />
                    <img src="./src/assets/card/cc5.jpg" alt="" />
                    <img src="./src/assets/card/cc6.jpg" alt="" />
                </div>
                </Col> */}
            </Row>
        </Container>
    </div>
  )
}
