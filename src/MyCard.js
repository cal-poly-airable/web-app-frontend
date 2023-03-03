
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import React, { Component } from "react";
function MyCard(props) {

    return(
      
      <div style={{ display: "flex", justifyContent: "center"}}>
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      
      <Card.Text>
        <Row><Col xs={props.options.colSize}>
        <Card.Subtitle>{props.options.subtitle}</Card.Subtitle>
        <Card.Title>{props.options.value}</Card.Title></Col>
        <Col><img src={props.options.img} style={{float: 'right'}} width="50"/></Col>
        </Row>
      </Card.Text>
    </Card.Body>
  </Card></div>)
  
}

export default MyCard;