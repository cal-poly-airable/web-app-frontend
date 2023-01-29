
import './App.css'
import './custom-color.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

//
function Bruh() { 
    return (
      <>
        <div><h1 style={{textAlign: 'center'}} >Hello Y, welcome to your Patient Portal!</h1> <br/> 
        </div>
          
    <div style={{ display: "flex", justifyContent: "center"}}>
      <ButtonGroup>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Middle</Button>
      <Button variant="secondary">Right</Button>
      </ButtonGroup>
            </div> </>
    );
}
export default Bruh;