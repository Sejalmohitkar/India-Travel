import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <div>
      <footer style={{ backgroundColor: "#11151E", color: "#fff" }} className="py-5">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h4>India Travel</h4>
            <p>Your trusted guide to unforgettable adventures around the world. We provide the best travel packages, tips, and guidance for your next vacation.</p>
            <div className="mt-2 d-flex justify-content-center gap-3">
                <a href="#" className="text-white fs-4">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="text-white fs-4">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="text-white fs-4">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="text-white fs-4">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            
          </Col>
          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <div className='d-flex flex-column' >
              <Link to="/" ><Button variant="link" className="text-white text-decoration-none">Home</Button></Link>
              <Link to="/about" ><Button variant="link" className="text-white text-decoration-none">About</Button></Link>
              <Link to="/destination" ><Button variant="link" className="text-white text-decoration-none">Destination</Button></Link>
              <Link to="/contactus" ><Button variant="link" className="text-white text-decoration-none">Contact</Button></Link>
              </div>
            </ul>
            
          </Col>
          <Col md={4}>
            <h4>Contact</h4>
            <p>New Town, Nagpur, Maharashtra</p>
            <p>Email: sejalmohitkar@gmail.com</p>
            <p>Phone: 9774862532</p>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>copyright &copy; 2025 India Travel.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer1;
