import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import { Table, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientRow from './PatientRow';
import Patient from './Patient';

function BasicExample(props) { 
  const [formData, setFormData] = useState({ Username: '', UserID: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  const numPatients=5;
  const rows = [];
for (let i = 1; i <= numPatients; i++) {
    rows.push(<PatientRow idx={i} key={i} patient={{name:"John Smith",username:"jsmith24",userID:"****4589"}}/>);
}

  return (<>
  <Container>
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Your Patient List
      </ListGroup.Item>
      
      <ListGroup.Item as="li"><Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-center align-middle col-sm-1">#</th>
          <th className="text-center align-middle col-sm-2">Name</th>
          <th className="text-center align-middle col-sm-2">userID</th>
          <th className="text-center align-middle col-sm-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table></ListGroup.Item>

    </ListGroup>
    <Form onSubmit={handleSubmit}>
    <Table striped>
      <thead>
        <tr>
          <th><Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="Username" onChange={handleChange}/>
              </Form.Group></th>
          <th><Form.Group controlId="formUserID">
                <Form.Label>UserID</Form.Label>
                <Form.Control type="text" name="UserID" onChange={handleChange}/>
              </Form.Group></th>
          <th><Button variant="primary" type="submit">
                Add Patient
              </Button></th>
        </tr>
      </thead></Table>
              
            </Form>

    </Container>
    </>
  );
};

export default BasicExample;
