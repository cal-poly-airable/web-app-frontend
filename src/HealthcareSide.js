import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientRow from "./PatientRow";
import { Navbar, Nav } from "react-bootstrap";
import PatientSide from "./PatientSide";
import ProviderCode from "./ProviderCode";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import "./custom-color.css"
import "./global.css"

function HealthcareSide(props) {
  //UI for Healthcare Providers
  var auth = localStorage.getItem("token");
  const domain = process.env.REACT_APP_API_DOMAIN;
  let userData = props.provider;
  //console.log(userData)
  var arr = userData.patients;
  const [rows, setRows] = useState([]);
  const [patient, setPatient] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleViewData = async (patientId) => {
    axios.defaults.headers.common = { Authorization: `${auth}` }; //Note that the Authorization Value is just the token, not 'Bearer {Token}'
    const response = await axios.get(domain + "/provider/patient/" + patientId);
    //console.log(response.data);
    setPatient(response.data);

    //console.log(`Viewing data for patient ${patientId}`);
    //console.log(patient);
  };
  /*const navigate = useNavigate();
  const onVentigatorFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAIRABLETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignOutTextClick = useCallback(() => {
    navigate("/signout");
  }, [navigate]);
*/
  const handleRemovePatient = (patientId) => {
    axios
      .delete(domain + "/provider/patient/" + patientId, {
        headers: {
          Authorization: `${auth}`,
        },
      })
      .then((response) => {
        //console.log(response.data);
        alert(response.data);
        console.log("arr", arr);
        arr = arr.filter((patient) => patient.id != patientId);
        const newRows = arr.map((patient, idx) => (
          <PatientRow
            key={idx + 1}
            idx={idx + 1}
            patient={{
              name: patient.name,
              email: patient.email,
              userID: patient.id,
            }}
            onViewData={handleViewData}
            onRemovePatient={handleRemovePatient}
          />
        ));
        setRows(newRows);
        console.log("arr", arr);
      })
      .catch((error) => {
        console.error(error);
        alert("Unknown Error");
      });
    console.log(`Removing patient ${patientId}`);
  };

  useEffect(() => {
    const newRows = arr.map(
      (
        patient,
        idx //load Patient data into rows
      ) => (
        <PatientRow
          key={idx + 1}
          idx={idx + 1}
          patient={{
            name: `${patient.name} `,
            email: patient.email,
            userID: patient.id,
          }}
          onViewData={handleViewData}
          onRemovePatient={handleRemovePatient}
        />
      )
    );
    setRows(newRows);
  }, []);
  if (patient) {
    return (
      <>
        <PatientSide patient={patient} auth={auth} providerPerspective={true} />
      </>
    );
  } else {
    return (
      <>
      <div style={{backgroundColor: '#e2e9e4', minHeight: '100vh'}}>
        <Navbar className="color-theme" variant="dark">
          <Container>
          <Nav className="me-auto" style={{fontFamily: 'var(--font-noto-serif-thai)'}}>
            <Navbar.Brand href="/">
              <img src="/ventigatorlogo.png" className="ventigator-logo-nav"/>{' '}
              Airable Healthcare
              </Navbar.Brand>
            </Nav>
            <Nav className="ml-auto" style={{fontFamily: 'var(--font-mulish)'}}>
              <Nav.Link href="/Signout">Sign Out</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <div>
            <br />
          </div>
          <h1 style={{ textAlign: "center" }}>
            Hello Dr. {userData.name}, welcome to your Healthcare Provider
            Portal!
          </h1>{" "}
          <br />
        </div>
        <div></div>
        <Container>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active style={{backgroundColor: '#94a187', borderColor: '#94a187', color: 'white'}}>
              Your Patient List
            </ListGroup.Item>

            <ListGroup.Item as="li">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-center align-middle col-sm-1">#</th>
                    <th className="text-center align-middle col-sm-1">Name</th>
                    <th className="text-center align-middle col-sm-1">
                      userID
                    </th>
                    <th className="text-center align-middle col-sm-2">Email</th>
                    <th className="text-center align-middle col-sm-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </ListGroup.Item>
          </ListGroup>
          <Form onSubmit={handleSubmit}></Form>
          <br />
          <ProviderCode code={userData.providerCode} />
        </Container>
      </div>
      </>
    );
  }
}

export default HealthcareSide;
