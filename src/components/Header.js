import React from "react";
import { Link } from "react-scroll";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <div className="p-bkgd">
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
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
          <Button to="tickets" spy={true} smooth={true}>
            Buy Tickets
          </Button>
        </li>
      </ul>
    </div>
  );
}
