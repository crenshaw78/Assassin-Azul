import React from 'react';
import { Button } from "react-bootstrap";


const Tickets = (props) => {

  const handleClick = () => {
    props.changeTicketStatus(false);
  }

  return (
    <div className="cart">
      <ul>
        <li>Adult</li>
        <li>Child</li>
        <li>Car</li>
      </ul>
      <Button style={{borderRadius: "3vmin"}} onClick={() => handleClick()}>Close</Button>
    </div>
  )
};

export default Tickets;