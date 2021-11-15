import React from "react";
import movieList from "../assets/js/array";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <div className="s-bkgd flex-center padding-2">

        <Carousel>
          {movieList.map((movie, i) => (
            <Carousel.Item key={i}>
              <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                  <h3>{movie.title}</h3>
                  <p>{movie.subtitle}</p>
                </div>
                <img
                  src={require(`../assets/images/${movie.image}`).default}
                  alt={movie.title}
                  style={{ width: 200 }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

    </div>
  );
}

export default Banner;