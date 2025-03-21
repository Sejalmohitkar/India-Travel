import React from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';

const images = [
  "https://indiatravel.com/wp-content/uploads/2022/03/Khajuraho.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Chattisgarh.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/orccha.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Varanasi.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Jaisalmer.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Nubra-Valley.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Leh.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Pangong-Tso.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Mahabalipuram.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Alleppey.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Periyar-National-Park.jpg",
  "https://indiatravel.com/wp-content/uploads/2022/03/Pelling.jpg",
];

const Card1 = () => {
  return (
    <div>
      <h1 className='text-dark fw-bold fs-1 text-center mt-5 mb-5'>TOP DESTINATIONS IN INDIA</h1>
      
      {/* Responsive Grid System */}
      <Container className="mt-4">
        <Row className="g-4 justify-content-center">
          {images.map((src, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Card style={{ width: '18rem' }} className="shadow-sm border-0">
                <Card.Img className="rounded-2" variant="top" src={src} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Centered Button */}
      <Button 
        variant="outline-primary" 
        className="d-block mx-auto rounded-pill px-4 py-2 shadow-lg mt-5"
      >
        View More
      </Button>
    </div>
  );
};

export default Card1;
