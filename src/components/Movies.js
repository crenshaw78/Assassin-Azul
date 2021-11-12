import React from "react";
import movieList from "../assets/js/array";
import { Carousel } from "react-bootstrap";

function Movies() {
  return (
    <div className="s-bkgd flex-center padding-1 ">
      <h1>MOVIES SHOWN</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Carousel>
          {movieList.map((movie, i) => (
            <Carousel.Item>
              <img
                key={i}
                src={require(`../assets/images/${movie.image}`).default}
                alt={movie.title}
                style={{ width: 200 }}
              />
              <Carousel.Caption>
                <h3>{movie.title}</h3>
                <p>{movie.subtitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Movies;
