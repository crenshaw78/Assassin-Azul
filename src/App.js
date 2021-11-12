

import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Movies from './components/Movies';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Tickets from './components/Tickets';
import './App.css';


export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <div id="movies">
        <Movies />
      </div>
      <div id="newsletter">
        <Newsletter />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="tickets">
        <Tickets />
      </div>
    </div>
  );
}

