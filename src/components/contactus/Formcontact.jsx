import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "./formcontact.css";

const Formcontact = () => {
  return (
    <div>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="mb-4">Let's get in touch</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>
                  Full Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Email <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  WhatsApp Number <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your WhatsApp number"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Tour Name <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the tour name"
                  required
                />
              </Form.Group>
            </Form>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Col>
          <Col md={5} className="d-flex flex-column justify-content-center ms-5">
            <h2 className="mb-5">You can find us at</h2>

            <h6 className="text-muted">EMAIL</h6>
            <p className="mb-5">info@indiatravel.com</p>

            <h6 className="text-muted">LOCATION</h6>
            <p>New Nagpur, India</p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="fs-4 text-secondary social-icon">
                <i className="fa fa-facebook"></i>
              </a>

              <a href="#" className="fs-4 text-secondary social-icon">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
            <hr className="my-4" style={{ borderTop: "2px solid black" }} />

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Formcontact;
