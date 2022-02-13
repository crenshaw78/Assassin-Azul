import React, { useState } from "react";
import movieList from "../assets/js/array";


function Movies(props) {
  const [movieWithExtraInfo, setMovieWithExtraInfo] = useState(props.displayedMovie);

  return (
    <div className="s-bkgd flex-center padding-2">
      {console.log("displayedMovie = " + props.displayedMovie)}
      {console.log("movieWithExtraInfo = " + movieWithExtraInfo)}
      <h1>MOVIES SHOWN</h1>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {movieList.map((movie, i) => (
          <div key={'m'+i} style={{height: 500, display: "flex", flexDirection: "column", justifyContent: "end", padding: 10}}>
            <img
              src={require(`../assets/images/${movie.image}`).default}
              alt={movie.title}
              style={(movieWithExtraInfo === i) ? { width: 240, height: 360 } : { width: 200, height: 300 }}
              onMouseEnter={() => setMovieWithExtraInfo(i)}
              onMouseLeave={() => setMovieWithExtraInfo(props.displayedMovie)}
              />
            {(movieWithExtraInfo === i) && (
                <div style={{backgroundColor: "#6e9ee6", textAlign: "center", fontSize: "2vmin", paddingTop: 10}}>
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
