import React from 'react'
import { Container, Button } from 'react-bootstrap';
// import './Indiatravel.css';
import './que.css'

const Que = () => {
  return (
    <div className='mt-5'>
      <div className="hero-section">
        <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-70">
          <h1 className="fw-bold">QUESTIONS?</h1>
          <p className="lead">
            Whether you’re intrigued about India, looking for a tour package, or just hotels<br/>
            or transportation (flight/train/road), we’re here to help.
          </p>
          <Button variant="dark" className="mt-3 px-4 py-2">Let's Talk Now</Button>
        </Container>
      </div>
    </div>
  )
}

export default Que
