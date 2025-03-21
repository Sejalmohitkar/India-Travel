import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "../../assets/abt.jpg";

const Imagetext = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col lg={6}>
          <h1 className='text-dark fw-bold fs-1'>ABOUT INDIA</h1>
          
            <p className="text-black " style={{textAlign:'justify', fontSize:'20px'}}>
              India is a country where culture resonates, tradition speaks,
              beauty entices, and variety fascinates. India’s religious,
              linguistic, and cultural diversity is unsurpassed. India is known
              for its rich history, many ethnicities, and enormous landscapes.<br/><br/>
              <span className="lh-3">In the words of Mark Twain, “India is the cradle of the human
              race, the birthplace of human speech, the mother of history, the
              grandmother of legend and the great-grandmother of tradition.”</span>
            </p>
          </Col>

          <Col lg={6} className="text-center ">
            <img src={Image} alt="Sample" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Imagetext;
