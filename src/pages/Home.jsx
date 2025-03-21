import React from 'react';
import './home.css';
import Carousel1 from '../components/home/Carousel1';
import Imagetext from '../components/home/Imagetext';
import Card1 from '../components/home/card1';
import 'font-awesome/css/font-awesome.min.css';
import Train from '../components/home/train';
import Hotel from '../components/home/hotel';
import Que from '../components/home/Que';
import Blog from '../components/home/blog';

const Home = () => {
  return (
    <div>
      <Carousel1/>
      <Imagetext/>
      <Card1/>
      <Train/>
      <Hotel/>
      <Blog/>
      <Que/>
    </div>
  );
};


export default Home