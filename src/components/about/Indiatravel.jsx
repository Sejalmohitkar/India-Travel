import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Indiatravel = () => {
  return (
    <div>
     <Container className="d-flex justify-content-center align-items-center ">
      <div className="p-4" style={{ maxWidth: '950px'}}>
        <Card.Body>
          <h1 className="text-center fw-bold text-black fs-1">INDIA TRAVEL</h1>
          <h4 className="text-center text-black mb-4">YOUR VIRTUAL PASSAGE TO INDIA</h4>
          <p className="text-center text-black fs-5">
            IndiaTravel.com is a gateway of information and services for travelers who want to get to know India a little bit better.
            As some say, travel in India is indescribable; reading is insufficient to convert a skeptic into a firm believer.
            You must go on a trip to understand what it’s like to travel around India.
          </p>
          <p className="text-center text-black fs-5">
            Our focus has been on how to assist people to travel better, particularly in India. To make such experiences more accessible,
            we offer a comprehensive choice of trip packages and destination insights.
          </p>
          <p className="text-center text-black fs-5">
            We at IndiaTravel.com are excited to provide value-added services to travelers from all around the world.
            We hope you have as much fun surfing our website as we did creating it. Happy traveling!
          </p>
        </Card.Body>
      </div>
    </Container>
    </div>
  )
}

export default Indiatravel;
