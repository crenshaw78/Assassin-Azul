import React from "react";
import { Link } from "react-scroll";
import theaterInfo from "../assets/js/theater";

export default function Footer() {
  return (
    <div className="p-bkgd padding-1">
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          fontSize: "calc(8px + 3vmin)",
          paddingLeft: "15px"
        }}
      >
        <li style={{width: "50%"}}>
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
      </ul>
    </div>
  );
}
