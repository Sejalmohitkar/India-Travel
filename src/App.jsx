import React from 'react';
import ReactDom from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './layout/Navbar1.jsx'
import Footer1 from './layout/Footer1.jsx'
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Destination from './pages/Destination.jsx';
import Luxurytrain from './pages/Luxurytrain.jsx';
import Luxuryhotel from './pages/Luxuryhotel.jsx';
import Contactus from './pages/Contactus.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
        <Router>
        <Navbar1/>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/destination' element={<Destination/>} />
          <Route path='/luxurytrain' element={<Luxurytrain/>}/>
          <Route path='/luxuryhotel' element={<Luxuryhotel/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
          </Routes>
          <Footer1/>
        </Router>
        
    </>
  )
}

export default App
