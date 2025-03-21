
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../layout/navbar.css';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  return (
    <Navbar expand="lg" className=" nav-bg navbar navbar-expand-lg">
      <Container>
        <Link to="/" className="fw-bold fs-3 text-dark my-custom-color text-decoration-none">India Travel</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/about" className="fs-5 text-white me-3 hover:text-light text-decoration-none">About</Link>
            <Link to="/destination" className="fs-5 text-white me-3 hover:text-light text-decoration-none">Destination</Link>
            <Link to="/luxurytrain" className="fs-5 text-white me-3 hover:text-light text-decoration-none">Luxury Trains</Link>
            <Link to="/luxuryhotel" className="fs-5 text-white hover:text-light text-decoration-none">Luxury Hotels</Link>
            <Link to="/contactus"className="fs-5 text-white ms-3 hover:text-light text-decoration-none">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Navbar1;

