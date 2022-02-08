import React from "react";
import movieList from "../assets/js/array";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Banner = (props) => {

  const handleClick = () => {
    props.changeTicketStatus(true);
  }

  const setMovieKey = () => {
    const elem = document.getElementsByClassName('active carousel-item')[0]
    console.log('in banner.js index = '+elem.id)
    props.changeFeaturedMovie(elem.id);
  }

  return (
    <div className="p-bkgd flex-center padding-2">

        <Carousel onSlide={setMovieKey} style= {{width: "80%"}} >
          {movieList.map((movie, i) => (
            <Carousel.Item id={i} key={i}>
              <div style={{ width:"80%", display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "0 auto", padding: "27px", alignItems: "center" }}>
                <div style={{ width: "50%", height: "50%", display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                  <p style={{fontSize: "4vmin"}}>NOW PLAYING <span style={{ fontSize: "6vmin", color: "#1963ac" }}>{movie.time}</span></p>
                  <h3 style={{fontSize: "9vmin"}}>{movie.title}</h3>
                  <p style={{fontSize: "6vmin"}}>{movie.subtitle}</p>
                  <Button style={{width: "30%", borderRadius: "4vmin" }} onClick={() => handleClick()}>Buy Tickets</Button>
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