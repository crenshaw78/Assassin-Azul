import React, { useState} from 'react';
import { CloseButton, Row, Col, Container } from "react-bootstrap";
import theaterInfo from "../assets/js/theater";


const Tickets = (props) => {

  const closeTicketStore = () => {
    props.toggleTicketStore(false);
  }

  const [counter0, setCounter0] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter = (ticketType) => {
    if (ticketType === 0) {
      setCounter0(counter0 + 1);
    }
    else if (ticketType === 1) {
      setCounter1(counter1 + 1);
    }
    else {
      setCounter2(counter2 + 1);
    }   
  }

  const decrementCounter = (ticketType) => {
    if (ticketType === 0) {
      if (counter0 > 0) {
        setCounter0(counter0 - 1);
      }
    }
    else if (ticketType === 1) {
      if (counter1 > 0) {
        setCounter1(counter1 - 1);
      }
    }
    else {
      if (counter2 > 0) {
        setCounter2(counter2 - 1);
      }
    } 
  }
  
  const showQuantity = (ticketType) => {
    if (ticketType === 0) {
      return counter0;
    }
    else if (ticketType === 1) {
      return counter1;
    }
    else {
      return counter2;
    }
  }

  return (
    <div className="cart">
      <CloseButton style={{justifyContent: "right"}} onClick={() => closeTicketStore()}></CloseButton>
      <Container>
        {theaterInfo.ticketType.map((ticket, i) => (
          
          <Row>
            <Col>{ticket.type}: </Col>
            <Col>${ticket.price}</Col>
                <Col>Qty: </Col>
                <Col style={{cursor: "pointer"}} onClick={() => decrementCounter(i)}>-</Col>
                <Col>{showQuantity(i)}</Col>
                <Col style={{cursor: "pointer"}} onClick={() => incrementCounter(i)}>+</Col>
          </Row>

        ))}
      </Container>
      <br />
      <div>Total: ${
          (theaterInfo.ticketType[0].price ? counter0 * theaterInfo.ticketType[0].price : 0) +
          (theaterInfo.ticketType[1].price ? counter1 * theaterInfo.ticketType[1].price : 0) +
          (theaterInfo.ticketType[2].price ? counter2 * theaterInfo.ticketType[2].price : 0)
        }
      </div>  
    </div>
  )
};

export default Tickets;