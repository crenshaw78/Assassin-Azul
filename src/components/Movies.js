import React, { useState } from "react";
import movieList from "../assets/js/array";


function Movies(featuredMovie) {
  const [movieInfo, setMovieInfo] = useState(featuredMovie);

  return (
    <div className="s-bkgd flex-center padding-2">
      <h1>MOVIES SHOWN</h1>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {movieList.map((movie, i) => (
          <div style={{display: "flex", flexDirection: "column", justifyContent: "end", padding: 10}}>
            <img
              key={movie.id}
              src={require(`../assets/images/${movie.image}`).default}
              alt={movie.title}
              style={{width: 200, height: 300}}
              onMouseEnter={() => setMovieInfo(i)}
              onMouseLeave={() => setMovieInfo(featuredMovie)}
              />
            {(movieInfo === i) && (
                <div style={{backgroundColor: "#6e9ee6", textAlign: "center", fontSize: "1.75vmin", paddingTop: 10}}>
                  <p>{movie.title} {movie.subtitle}</p>
                  <p>{movie.time}</p>
                </div>
              )}
          </div>
        ))}

              
        
      </div>
    </div>
  );
}

export default Movies;
