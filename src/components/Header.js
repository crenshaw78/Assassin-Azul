import React from "react";
import { Link } from "react-scroll";
import { Button } from "react-bootstrap";
import theaterInfo from "../assets/js/theater";

export default function Header() {
  return (
    <div className="p-bkgd padding-1">
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          alignItems: "end",
          fontSize: "4vmin",
          paddingLeft: "15px"
        }}
      >
        <li style={{width: "40%"}}>
          <img
              key={"logo"}
              src={require(`../assets/images/${theaterInfo.logo}`).default}
              alt={"logo"}
              />
        </li>
        <li style={{cursor: "pointer"}}>
          <Link to="movies">
            Movies Shown
          </Link>
        </li>
        <li style={{cursor: "pointer"}}>
          <Link to="newsletter">
            Join Newsletter
          </Link>
        </li>
        <li style={{cursor: "pointer"}}>
          <Link to="contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Button>Buy Tickets</Button>
        </li>
      </ul>
    </div>
  );
}
