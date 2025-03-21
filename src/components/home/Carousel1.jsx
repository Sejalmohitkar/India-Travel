import React from "react";
import { Container, Carousel, Button } from 'react-bootstrap';
import Image from "../../assets/taj.jpg";
import './carousel1.css'

const Carousel1 = () => {
  return (
    <div>
      

<Carousel controls={true} indicators={false} interval={3000}>
      <Carousel.Item>
        <div className="carousel-image" style={{ backgroundImage: `url(${Image})` }}>
          <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
            <p className="small-text">Explore India with Our Package</p>
            <h1 className=" bold-text fw-bold">EXPLORE INDIA FESTIVAL AND CULTURE </h1>
            <Button variant="danger" className="mt-3 px-4 py-2">Book Now</Button>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image" style={{ backgroundImage: `url('https://blog-content.ixigo.com/wp-content/uploads/2018/07/blog18.jpg')` }}>
          <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
            <p className="small-text">Explore India with India Travel</p>
            <h1 className="fw-bold bold-text">EXPERIENCE LUXURY TRAINS OF INDIA</h1>
            <Button variant="danger" className="mt-3 px-4 py-2">Book Now</Button>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image" style={{ backgroundImage: `url('https://4.bp.blogspot.com/-S0ngG56-37w/VK95d5neojI/AAAAAAAAGqU/Y-S7JvTE16A/s1600/The%2BOberoi%2BUdaivilas%2C%2BUdaipur.jpg')` }}>
          <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
            <p className="small-text">Explore India with India Travel</p>
            <h1 className="fw-bold bold-text">EXPLORE LUXURY UNIQUE HOTELS OF INDIA</h1>
            <Button variant="danger" className="mt-3 px-4 py-2">Book Now</Button>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Carousel1;

