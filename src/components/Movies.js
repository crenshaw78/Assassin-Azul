import React from "react";
import movieList from "../assets/js/array";


function Movies() {
  return (
    <div className="s-bkgd flex-center padding-2">
      <h1>MOVIES SHOWN</h1>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {movieList.map((movie, i) => (
            <img
              key={i}
              src={require(`../assets/images/${movie.image}`).default}
              alt={movie.title}
              style={{width: 200, height: 300}}
              />
        ))}
      </div>
    </div>
  );
}

export default Movies;
