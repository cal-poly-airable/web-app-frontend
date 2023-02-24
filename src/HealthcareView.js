import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ButtonGroup, Col, Container, Row, InputGroup, FormControl } from 'react-bootstrap';
import { Table, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientRow from './PatientRow';
import { Navbar,Nav, Card } from 'react-bootstrap';
import Patient from './Patient';
import ProviderCode from './ProviderCode';

function HealthcareView(props) { 

  var auth=localStorage.getItem("token")
  const domain=process.env.REACT_APP_API_DOMAIN
  let userData=props.provider

  const [formData, setFormData] = useState({ Username: '', UserID: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  const handleViewData = (patientId) => {
    console.log(`Viewing data for patient ${patientId}`);
  };

  const handleRemovePatient = (patientId) => {
    console.log(`Removing patient ${patientId}`);
  };







  console.log(userData)
  const arr=userData.patients
  const numPatients=arr.length;
  
  const rows = [];
for (let i = 0; i < numPatients; i++) {
    
    rows.push(<PatientRow
      key={i+1}
      idx={i+1}
      patient={{name:arr[i].name,email:arr[i].email,userID:arr[0].id}}
      onViewData={handleViewData}
      onRemovePatient={handleRemovePatient}
    />);
}







  return (<>
  <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Airable Healthcare</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Signout">Sign Out</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    <div>
    <div><br /></div>
    <h1 style={{textAlign: 'center'}} >Hello Dr. {userData.name}, welcome to your Healthcare Provider Portal!</h1> <br/> 
    </div>
    <div></div>
  <Container>
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Your Patient List
      </ListGroup.Item>
      
      <ListGroup.Item as="li"><Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-center align-middle col-sm-1">#</th>
          <th className="text-center align-middle col-sm-1">Name</th>
          <th className="text-center align-middle col-sm-1">userID</th>
          <th className="text-center align-middle col-sm-2">Email</th>
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
            <ProviderCode code={userData.providerCode}/>
    </Container>
    </>
  );
};

export default HealthcareView;
