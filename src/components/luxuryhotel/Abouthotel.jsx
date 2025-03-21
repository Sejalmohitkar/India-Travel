import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Abouthotel = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center my-4">
        <div className="p-4" style={{ maxWidth: "950px" }}>
          <Card.Body>
            <h1 className="text-center fw-bold text-black fs-1">
              LUXURY HOTELS IN INDIA
            </h1>
            <p className="text-start text-black fs-6">
              India, a mesmerising land, is known for surprising its guests with
              colourful treats. Every traveller’s bucket list includes exploring
              the country’s unique cultures, rich historical landmarks, and
              breathtaking scenery. When it comes to hotels, India has a wide
              range of possibilities, including royal hotels, tented camps, and
              ultra-luxurious contemporary hotels.
            </p>
            <p className="text-start text-black fs-6">
              Amazing deals on the world’s most opulent hotels. Experience the
              grandeur of the world’s most luxurious hotels in India. India is a
              vast country with a diverse culture and history. The motto of the
              hospitality industry is athithi devo bhava – the guest is like god
              and this concept lies at the core of the hospitality sector in
              India. If you’re looking for the greatest locations to stay for a
              special occasion, look no further.
            </p>
            <p className="text-start text-black fs-6">
              We’ve identified some of the greatest hotels in India that warrant
              a visit since you’re spoiled for choice here. Here are some of
              India’s greatest luxury hotels and places to stay, where you’ll
              get nothing but the best treatment.
            </p>
          </Card.Body>
        </div>
      </Container>
    </div>
  );
};

export default Abouthotel;
