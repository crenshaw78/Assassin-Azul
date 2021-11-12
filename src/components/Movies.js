import React from 'react';
import movieList from '../assets/js/array'

function Movies() {
  return (
    <div>
      <h1>Movies Shown</h1>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {movieList.map((movie, i) => (
            <img
              key={i}
              src={require(`../assets/images/${movie.image}`).default}
              alt={movie.title}
              style={{width: 150, height: 300}}
              />
        ))}
      </div>
    </div>
  )
};

export default Movies;