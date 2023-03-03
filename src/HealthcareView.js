import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container} from 'react-bootstrap';
import { Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientRow from './PatientRow';
import { Navbar,Nav, Card } from 'react-bootstrap';
import PatientSide from './PatientSide';
import ProviderCode from './ProviderCode';
import axios from 'axios';

function HealthcareView(props) { 

  var auth=localStorage.getItem("token")
  const domain=process.env.REACT_APP_API_DOMAIN
  let userData=props.provider

  console.log(userData)
  var arr=userData.patients
  const numPatients=arr.length;
  const [rows, setRows] = useState([]);
  const [patient, setPatient] = useState(null);




  const [formData, setFormData] = useState({ Username: '', UserID: '' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  }

  const handleViewData = async (patientId) => {

    axios.defaults.headers.common = {'Authorization': `${auth}`} //BEARER
    const response = await axios.get(domain+'/provider/patient/'+patientId);
    console.log(response.data)
    setPatient(response.data);
    
    console.log(`Viewing data for patient ${patientId}`);
    console.log(patient)
  };



  
  const handleRemovePatient = (patientId) => {
    // /provider/patient/
    axios.delete(domain+'/provider/patient/'+patientId, {
      headers: {
        Authorization: `${auth}`
      }
    })
      .then(response => {
        console.log(response.data);
        alert(response.data)
        console.log("arr",arr)
        arr=arr.filter(patient => patient.id != patientId)
        const newRows = arr.map((patient, idx) => (
          <PatientRow
            key={idx + 1}
            idx={idx + 1}
            patient={{ name: patient.name, email: patient.email, userID: patient.id }}
            onViewData={handleViewData}
            onRemovePatient={handleRemovePatient}
          />
        ));
        setRows(newRows);
        console.log("arr",arr)
      })
      .catch(error => {
        console.error(error);
        alert("Incorrect Jawn")
        
      });
    console.log(`Removing patient ${patientId}`);
  };



  useEffect(() => {
    console.log("arrrr",arr)
    const newRows = arr.map((patient, idx) => (
      <PatientRow
        key={idx + 1}
        idx={idx + 1}
        patient={{ name: `${patient.name} `, email: patient.email, userID: patient.id }}
        onViewData={handleViewData}
        onRemovePatient={handleRemovePatient}
      />
    ));
    setRows(newRows);
  }, []);
  if(patient){
    return (
      <>
        <PatientSide patient={patient} auth={auth} providerPerspective={true}/>
  
       </>
    
    );}
    else{
  return (<>
  <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Airable Healthcare</Navbar.Brand>
          <Nav className="ml-auto">
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
    {/*<Table striped>
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
      </thead></Table>*/}
              
            </Form>
            <br/>
            <ProviderCode code={userData.providerCode}/>
    </Container>
    </>
  );}
};

export default HealthcareView;
