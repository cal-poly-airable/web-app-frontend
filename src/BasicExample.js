import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col, Container, Row } from 'react-bootstrap';
import { Table, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function BasicExample(props) { 
  const [formData, setFormData] = useState({ Username: '', UserID: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
          <th className="text-center align-middle">#</th>
          <th className="text-center align-middle">Name</th>
          <th className="text-center align-middle">userID</th>
          <th className="text-center align-middle">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center align-middle">1</td>
          <td className="text-center align-middle">Mark</td>
          <td className="text-center align-middle" >Otto</td>
          <td className="text-center align-middle"><Button variant="success">Success</Button></td>
        </tr>
        <tr>
          <td className="text-center align-middle">2</td>
          <td className="text-center align-middle">Jacob</td>
          <td className="text-center align-middle">Thornton</td>
          <td className="text-center align-middle">@fat</td>
        </tr>
        <tr>
          <td className="text-center align-middle">3</td>
          <td className="text-center align-middle">Larry</td>
          <td className="text-center align-middle">the Bird</td>
          <td className="text-center align-middle">@twitter</td>
        </tr>
      </tbody>
    </Table></ListGroup.Item>

    </ListGroup>
    <Form onSubmit={handleSubmit}>
    <Table striped>
      <thead>
        <tr>
          <th><Form.Group controlId="formUsername">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="Username" onChange={handleChange}/>
              </Form.Group></th>
          <th><Form.Group controlId="formUserID">
                <Form.Label>Username</Form.Label>
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
