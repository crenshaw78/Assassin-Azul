import React from "react";
import movieList from "../assets/js/array";

function Carousel() {
  return (
    <div className="p-bkgd flex-center padding-2">
      <h1>UNDER CONSTRUCTION</h1>
      <img
        key={movieList[0].title}
        src={require(`../assets/images/${movieList[0].image}`).default}
        alt={movieList[0].title}
      />
    </div>
  );
}

export default Carousel;
