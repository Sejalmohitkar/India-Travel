import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../home/train.css'

const Luxtrain = () => {
  return (
    <div>
    <div className="py-2" style={{ backgroundColor: "#FFDA2A", width:'100%'}}>
        <Container  className='d-flex ms-5 mt-1 mb-'>
        <Col xs={12} sm={6} md={3} className="text-center mx-3">
              <div className="h-4">
                {/* Circular Image */}
                <img
                  src="https://indiatravel.com/wp-content/uploads/2021/12/maharajas-express-special-train.png"
                  alt=""
                  className="img-fluid rounded-circle circle-img"
                />
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="text-center mx-3">
              <div className="">
                {/* Circular Image */}
                <img
                  src="https://indiatravel.com/wp-content/uploads/2021/12/Palace-on-wheels-special-train.png"
                  alt=""
                  className="img-fluid rounded-circle circle-img"
                />
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="text-center mx-3">
              <div className="">
                {/* Circular Image */}
                <img
                  src="https://indiatravel.com/wp-content/uploads/2021/12/Deccan-Odyssey-special-Train.png"
                  alt=""
                  className="img-fluid rounded-circle circle-img"
                />
              </div>
            </Col>

            <Col xs={12} sm={6} md={3} className="text-center mx-3">
              <div className="">
                {/* Circular Image */}
                <img
                  src="https://indiatravel.com/wp-content/uploads/2021/12/golden-chariot-special-train.png"
                  alt=""
                  className="img-fluid rounded-circle circle-img"
                />
              </div>
            </Col>
        </Container>

    </div>
    </div>
  )
}

export default Luxtrain
