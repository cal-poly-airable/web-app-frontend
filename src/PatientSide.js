
import './App.css'
import './custom-color.css'
import { CanvasJSChart } from 'canvasjs-react-charts'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Navbar, Nav, Card,Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import VerticalExample from './buttonGroup.js'

//
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MyCard from './MyCard';
import Graph from './graph'
import ProviderModal from './ProviderModal';
//
function PatientSide(props) {
  const isProvider=props.providerPerspective
  var auth=localStorage.getItem("token")
  const domain=process.env.REACT_APP_API_DOMAIN
  let userData = props.patient
  console.log(userData)


///
  var tempProv=(userData.providers.length>0)?userData.providers[0]:''
  const [providerData, setProviderData] = useState(tempProv);
  const [showProviderModal, setShowProviderModal] = useState(false);

  const handleProviderModalSubmit = (value) => {
    console.log("providerData",providerData)
    console.log("auth",auth)
    console.log("auth")
    if(providerData.code){
      axios.delete(domain+'/patient/provider/'+providerData.code, {
        headers: {
          Authorization: `${auth}`
        }
      })
        .then(response => {
          console.log(response.data);
          alert(response.data)
          setProviderData('');
        })
        .catch(error => {
          console.error(error);
          alert("Incorrect Jawn")
        });
      
    }else{
    
      //send to server
      console.log("here",value)
      axios.post(domain+'/patient/provider', { providerCode: value }, {
        headers: {
          Authorization: `${auth}`
        }
      })
        .then(response => {
          console.log("response.data",response.data);
          alert(`Added Dr ${response.data.name}`)
          setProviderData(response.data);
        })
        .catch(error => {
          console.error(error);
          alert("Incorrect Jawn")
        });
        }


    setShowProviderModal(false);
  };

  const handleProviderModalHide = () => {
    setShowProviderModal(false);
  };



//

  var HRdata = []
  var O2data = []
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [radioValue2, setRadioValue2] = useState('1');

  userData.vitals.sort((a, b) => {
    return a.time - b.time;
  });
  //using time from last recorded?

  /// SET Options dont calculate based on button!!
  var lastTime = userData.vitals[userData.vitals.length - 1].time
  lastTime = Date.now()
  console.log(lastTime)
  var cutoff;
  switch (radioValue2) {
    case "1":
      cutoff = (60 * 60 * 1000)
      break;
    case "2":
      cutoff = (24 * 60 * 60 * 1000)
      break;
    case "3":
      cutoff = (7 * 24 * 60 * 60 * 1000)
      break;
  }
  ///
  //I need to filter and map
  console.log(radioValue2, cutoff)
  var vitals = userData.vitals.filter(vital => vital.time > lastTime - cutoff)
  console.log(vitals)

  //HRdata=HRdata.map({element: s, el:t }->{x:new Date(element.time),y:element.O2})


  for (var i = 0; i < vitals.length; i++) {
    HRdata[i] = ({ x: new Date(vitals[i].time), y: vitals[i].HR })
    O2data[i] = ({ x: new Date(vitals[i].time), y: vitals[i].O2 })
  }

  const radios = [
    { name: 'Heart Rate', value: '1' },
    { name: 'O2 Sat.', value: '2' },
  ];
  const radios2 = [
    { name: 'Hour', value: '1' },
    { name: 'Day', value: '2' },
    { name: 'Week', value: '3' },
  ];



  ///
  var timePeriod;
  switch (radioValue2) {
    case "1":
      timePeriod = "Hourly"
      break;
    case "2":
      timePeriod = "Daily"
      break;
    case "3":
      timePeriod = "Weekly"
      break;
  }

  //do x value format
  var Yaxis = (radioValue == 1) ? " BPM" : "% Sat."
  var options = {
    animationEnabled: true,

    title: {
      text: `${(radioValue == 1) ? "Heart Rate" : "O2 Saturation"} (${timePeriod})`
    },
    axisX: {
      valueFormatString: (timePeriod == "Weekly") ? "DDD hh:mm TT" : "hh:mm TT",
    },
    axisY: {
      title: Yaxis,

    },
    data: [{
      color: (radioValue == 1) ? "#ea0016" : "#8b0000",
      xValueFormatString: (timePeriod == "Weekly") ? "MM/DD hh:mm TT" : "hh:mm TT",
      yValueFormatString: `###'${Yaxis}'`,
      type: "spline",
      dataPoints: (radioValue == 1) ? HRdata : O2data
    }]
  }
  
  function Download() {
    var csvString = [
      [
        "Date & Time",
        "Heart Rate",
        "O2 Saturation"
      ]
    ]
    var a = userData.vitals.map(item => [
      (new Date(item.time).toLocaleString('en-US')).replace(",", ""),
      item.HR,
      item.O2
    ])
    console.log(a)
    csvString = csvString.concat(a)
      .map(e => e.join(","))
      .join("\n");

    const blob = new Blob([csvString], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "UserVitals.csv";
    link.href = url;
    link.click();
  }


  //{JSON.stringify(userData)} put back in div

  const C1 = { img: 'heart-beat.svg', subtitle: 'Heart Rate (Latest)', value: `${userData.vitals[userData.vitals.length - 1].HR} BPM`, colSize: 7 };
  var cnt = 0;
  var avgHR = 0;
  var avgO2 = 0;
  vitals.forEach(element => {
    avgHR += element.HR
    avgO2 += element.O2
    cnt++;
  });

  avgHR /= cnt;
  avgO2 /= cnt;
  avgHR = parseFloat(avgHR.toFixed(0))
  avgO2 = parseFloat(avgO2.toFixed(0))
  avgHR = (vitals.length > 0) ? `${avgHR} BPM` : 'N/A'
  avgO2 = (vitals.length > 0) ? `${avgO2}% Sat.` : 'N/A'
  const C2 = { img: 'heart-beat.svg', subtitle: `AVG Heart Rate \n(${timePeriod})`, value: `${avgHR}`, colSize: 8 };
  const C3 = { img: 'O2.png', subtitle: 'O2 Saturation (Latest)', value: `${userData.vitals[userData.vitals.length - 1].O2}% Sat.`, colSize: 7 };

  const C4 = { img: 'O2.png', subtitle: `AVG O2 Saturation \n(${timePeriod})`, value: `${avgO2}`, colSize: 8 };
  return (
    <> {/* move modal to the bottom after finishing*/}
    
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">Airable {(isProvider)?"Healthcare":"Patient"}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={Download}>Export Data</Nav.Link>
          {(!isProvider)?
          <Nav.Link onClick={() => setShowProviderModal(true)}>Your Provider</Nav.Link>:""
          }
          
        </Nav>
        <Nav className="ml-auto">
        {(!isProvider)?
          <Nav.Link href="/Signout">Sign Out</Nav.Link>:<Nav.Link onClick={()=>window.location.reload()}>Return to Provider Portal</Nav.Link>
          }
        
        {/*<Nav>****ac94</Nav> */}
        
         
        </Nav>
        </Container>
        </Navbar>

      <div><h1 style={{ textAlign: 'center' }} >You are viewing {userData.name}'s Patient Portal!</h1> <br />
      <div>
      {/*<p>Provider data: {providerData}</p>*/}
      <ProviderModal
        show={showProviderModal}
        onHide={handleProviderModalHide}
        onSubmit={handleProviderModalSubmit}
        provider={providerData}
        setProviderData={setProviderData}
      />
    </div>




        <div>

          <Row>

            <Col sm={2}>
              <div><br /></div>
              <div><br /></div>
              <div><br /></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ButtonGroup>
                  {radios2.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio2-${idx}`}
                      type="radio"
                      variant='outline-primary'//{idx % 2 ? 'outline-info' : 'outline-primary'}
                      name="radio2"
                      value={radio.value}
                      checked={radioValue2 === radio.value}
                      onChange={(e) => setRadioValue2(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup></div>
                <div><br /></div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ButtonGroup>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio1-${idx}`}
                      type="radio"
                      variant={idx % 2 ? 'outline-dark' : 'outline-danger'}

                      name="radio"
                      value={radio.value}
                      checked={radioValue === radio.value}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
            </Col>
            <Col sm={10}>
            <CanvasJSChart options={options}/>

            </Col>
          </Row>





        </div><br />
          <div style={{ display: "flex", justifyContent: "center" }}>

          <Row>
              <Col md={3} xs={12}><MyCard options={C1} /></Col>
              <Col md={3} xs={12}><MyCard options={C2} /></Col>
              <Col md={3} xs={12}><MyCard options={C3} /></Col>
              <Col md={3} xs={12}><MyCard options={C4} /></Col>
            </Row>


          </div>

        <br /><div>
          <Table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Heart Rate (BPM)</th>
                <th>O2 Saturation (%)</th>
              </tr>
            </thead>
            <tbody>
              {vitals.map(arrayData => {
                return (
                  <tr>
                    <td>{(new Date(arrayData.time).toLocaleString('en-US'))}</td>
                    <td>{arrayData.HR}</td>
                    <td>{arrayData.O2}</td>
                  </tr>
                )
              }
              )}
            </tbody>
          </Table></div>
      </div> </>
  );
}
export default PatientSide;