import React, { useState } from "react";
import movieList from "../assets/js/array";


function Movies() {
  const [movieInfo, setMovieInfo] = useState(false);

  return (
    <div className="s-bkgd flex-center padding-2">
      <h1>MOVIES SHOWN</h1>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {movieList.map((movie, i) => (
          <div style={{display: "flex", flexDirection: "column", padding: 10}}>
            <img
              key={i}
              src={require(`../assets/images/${movie.image}`).default}
              alt={movie.title}
              style={{width: 200, height: 300}}
              onMouseEnter={() => setMovieInfo(true)}
              onMouseLeave={() => setMovieInfo(false)}
              /*
              onMouseEnter={e => setMovieInfo(e.currentTarget.true)}
              onMouseLeave={e => setMovieInfo(e.currentTarget.false)}
              */
              />
            {movieInfo && (
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
