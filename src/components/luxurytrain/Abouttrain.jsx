import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Abouttrain = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center ">
        <div className="p-4" style={{ maxWidth: "950px" }}>
          <Card.Body>
            <h1 className="text-center fw-bold text-black fs-1">
              LUXURY TRAINS IN INDIA
            </h1>
            <p className="text-start text-black fs-6">
              The Indian railways has a rich history and story. India has one of
              the most extensive railway networks in the world. Luxury trains in
              India gives you an opportunity to visit and experience India in an
              extraordinary and unique way.
            </p>
            <p className="text-start text-black fs-6">
              In 1982, the Indian Railways introduced its first luxury train –
              Palace on Wheels. There are now other luxury trains running
              multiple journeys around India giving you an opportunity to
              explore the rich culture, heritage, and history of India.
            </p>
            <p className="text-start text-black fs-6">
              The most luxurious of all is the Maharaja Express which runs
              multiple journeys between Delhi and Mumbai. It is great train to
              explore Northwest India; The Deccan Odyssey, covers key
              destinations in state of Maharashtra in West India; The Golden
              Chariot, the prefect train to explore South India; The Palace on
              Wheels run one round trip journey to the golden triangle of Delhi-
              Agra – Jaipur and some key spots in Rajasthan.
            </p>
            <p className="text-start text-black fs-6">
              India luxury Indian trains have mind-blowing interior, airy
              cheerful ambiance, exclusive gastronomic delights, highly active
              security system, and a richly relaxed environment. A journey on
              the India luxury trains will surely offer matchless comfort to its
              passengers and give you a chance to visit the famous tourist
              destinations of India through royal tunes.
            </p>
          </Card.Body>
        </div>
      </Container>
    </div>
  );
};

export default Abouttrain;
