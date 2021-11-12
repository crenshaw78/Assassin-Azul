import React from 'react';
import movieList from '../assets/js/array'

function Carousel() {
  return (
    <div>
      <h1>Under Construction</h1>
      <img
              key={movieList[0].title}
              src={require(`../assets/images/${movieList[0].image}`).default}
              alt={movieList[0].title}
              />
    </div>
  )
};

export default Carousel;