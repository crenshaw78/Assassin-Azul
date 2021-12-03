import React from "react";
import movieList from "../assets/js/array";
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <div className="s-bkgd flex-center padding-2">

        <Carousel style= {{width: "80%"}} >
          {movieList.map((movie, i) => (
            <Carousel.Item key={i}>
              <div style={{ width:"80%", display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "0 auto", padding: "27px", alignItems: "center" }}>
                <div style={{ width: "50%", height: "50%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                  <h3>{movie.title}</h3>
                  <p>{movie.subtitle}</p>
                  <p>{movie.time}</p>
                </div>
                <img
                  src={require(`../assets/images/${movie.image}`).default}
                  alt={movie.title}
                  style={{ width: "50%" }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

    </div>
  );
}

export default Banner;