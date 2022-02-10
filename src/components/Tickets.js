import React, { useState} from 'react';
import { CloseButton, Container, Row, Col, Button } from "react-bootstrap";
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

  const clearCounters = () => {
    setCounter0(0);
    setCounter1(0);
    setCounter2(0);
  }

  return (
    <div className="cart">
      <Container style={{fontSize: "2.5vmin", width: "90%"}} >
        <Row style={{justifyContent: "right"}} >
          <CloseButton onClick={() => closeTicketStore()}></CloseButton>
        </Row>
        <br />
        {theaterInfo.ticketType.map((ticket, i) => (
          
          <Row style={{height:"6vmin"}}>
            <Col xs={3} style={{fontWeight: "bold"}}>{ticket.type}: </Col>
            <Col xs={2}>${ticket.price}</Col>
            <Col xs={2}>Qty: </Col>
            <Col xs>
              <Button size="sm" style={{width:"4vmin", fontSize: "2vmin", fontWeight:"bold", borderRadius: "2vmin", cursor: "pointer"}} onClick={() => decrementCounter(i)}>-</Button>
            </Col>
            <Col xs>{showQuantity(i)}</Col>
            <Col xs>
              <Button size="sm" style={{width:"4vmin", fontSize: "2vmin", fontWeight:"bold", borderRadius: "2vmin", cursor: "pointer"}} onClick={() => incrementCounter(i)}>+</Button>
            </Col>
          </Row>

        ))}
        <br />
        <div style={{fontSize:"3vmin", fontWeight: "bold"}}>Total: ${
            (theaterInfo.ticketType[0].price ? counter0 * theaterInfo.ticketType[0].price : 0) +
            (theaterInfo.ticketType[1].price ? counter1 * theaterInfo.ticketType[1].price : 0) +
            (theaterInfo.ticketType[2].price ? counter2 * theaterInfo.ticketType[2].price : 0)
          }
        </div>
        <br />
        <Row style={{justifyContent: "space-between"}}>
          <Button style={{borderRadius: "3vmin", width: "40%"}}>Checkout</Button>
          <Button style={{borderRadius: "3vmin", width: "40%"}}  onClick={() => clearCounters()}>Clear</Button>
        </Row>
      </Container>
    </div>
  )
};

export default Tickets;