import React from "react";
import { Link } from "react-scroll";
import { Button } from "react-bootstrap";
import theaterInfo from "../assets/js/theater";

export default function Footer() {
  return (
    <div className="p-bkgd padding-1">
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        <li>
        <img
              key={"logo"}
              src={require(`../assets/images/${theaterInfo.logo}`).default}
              alt={"logo"}
              />
        </li>
        <li>
          <Link to="movies" spy={true} smooth={true}>
            Movies Shown
          </Link>
        </li>
        <li>
          <Link to="newsletter" spy={true} smooth={true}>
            Join Newsletter
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true}>
            Contact Us
          </Link>
        </li>
        <li>
          {/* <Button>
            <Link to="tickets" spy={true} smooth={true}>
              Buy Tickets
            </Link>
          </Button> */}
          <Button to="tickets">Buy Tickets</Button>
        </li>
      </ul>
    </div>
  );
}
