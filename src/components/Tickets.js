import React from 'react';
import { Button, Row, Col } from "react-bootstrap";
import theaterInfo from "../assets/js/theater";


const Tickets = (props) => {

  const closeTicketStore = () => {
    props.changeTicketStatus(false);
  }

  return (
    <div className="cart">
      <div>
        {theaterInfo.ticketType.map((ticket, j) => (
          <Row>
            <Col>{ticket.type}, ${ticket.price} </Col>
            <Col>
              <span>Qty:</span>
              <input
                type="number"
                placeholder="0"
              />
            </Col>
          </Row>
        ))}
      <br />
      <div>Total: </div>  
      <br />
      </div>
      <Button style={{borderRadius: "3vmin"}} onClick={() => closeTicketStore()}>Close</Button>
    </div>
  )
};

export default Tickets;