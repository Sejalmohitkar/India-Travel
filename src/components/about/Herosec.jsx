import React from 'react'
import abt1 from '../../assets/abtimg1.jpg';

const Herosec = () => {
  return (
    <div>
      <div
      className="text-white d-flex justify-content-center align-items-center "
      style={{
        backgroundImage: `url(${abt1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
      }}
      >
      <h1 className="fw-bold text-white mt-8 fs-1">ABOUT</h1>
    </div>
    <div
      className="text-white d-flex justify-content-center align-items-center "
      style={{
        backgroundImage: 'url("https://indiatravel.com/wp-content/uploads/2021/12/contact-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
      }}
      >
    </div>
    </div>
  );
};

export default Herosec;
