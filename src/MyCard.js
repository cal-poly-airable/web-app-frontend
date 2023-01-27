import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import React, { Component } from "react";
import { render } from "react-dom";
function MyCard(props) {

    return(
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      
      <Card.Text>
        <Row><Col>
        <Card.Subtitle>{props.options.subtitle}</Card.Subtitle>
        <Card.Title>{props.options.value}</Card.Title></Col>
        <Col><img src={props.options.img} style={{float: 'right'}} width="50"/></Col>
        </Row>
      </Card.Text>
    </Card.Body>
  </Card>)
  
}

export default MyCard;