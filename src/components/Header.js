import React from "react";
import { Link } from "react-scroll";
import theaterInfo from "../assets/js/theater";
import { Button } from "react-bootstrap";

const Header = (props) => {

  const handleClick = () => {
    props.changeTicketStatus(true);
  }

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
          <Button style={{borderRadius: "3vmin"}} onClick={() => handleClick()}>Buy Tickets</Button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
