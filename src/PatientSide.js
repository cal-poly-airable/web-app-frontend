import "./App.css";
import "./custom-color.css";
import { CanvasJSChart } from "canvasjs-react-charts";
import axios from "axios";
import React, { useState } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MyCard from "./MyCard";
import ProviderModal from "./ProviderModal";
import O2Saturation from "./O2Saturation";
import "./custom-color.css"

function PatientSide(props) {
  const isProvider = props.providerPerspective; //True if you are viewing from healthcare perspective
  var auth = localStorage.getItem("token"); //cognito issued JWT
  const domain = process.env.REACT_APP_API_DOMAIN; //domain for our backend
  let userData = props.patient; //patient data
  console.log(userData);

  const [showAlert, setShowAlert] = useState(false); //state for userID copied alert

  const handleCopyUserId = () => {
    navigator.clipboard.writeText(userData.subject);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const [saturation, setSaturation] = useState(userData.assistance); //Target O2 Saturation State

  const handleSaturationChange = (value) => {
    //Handles target sat. change (currently only enabled for healthcare providers)
    axios
      .post(
        domain + `/patient/${userData.subject}/saturation`,
        { assistance: value },
        {
          headers: {
            Authorization: `${auth}`,
          },
        }
      )
      .then(() => {
        //console.log("response.data",response.data);
        // alert(`Added Dr ${response.data.name}`)
        setSaturation(value);
      })
      .catch((error) => {
        console.error(error);
        alert("Unknown Error");
      });
  };

  //

  ///
  var tempProv = userData.providers.length > 0 ? userData.providers[0] : "";
  const [providerData, setProviderData] = useState(tempProv);
  const [showProviderModal, setShowProviderModal] = useState(false);

  const handleProviderModalSubmit = (value) => {
    //handles updating Provider Patient Link
    console.log("providerData", providerData);
    console.log("auth", auth);
    console.log("auth");
    if (providerData.code) {
      axios
        .delete(domain + "/patient/provider/" + providerData.code, {
          headers: {
            Authorization: `${auth}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          alert(response.data);
          setProviderData("");
        })
        .catch((error) => {
          console.error(error);
          alert("Unknown Error");
        });
    } else {
      //send to server
      console.log("here", value);
      axios
        .post(
          domain + "/patient/provider",
          { providerCode: value },
          {
            headers: {
              Authorization: `${auth}`,
            },
          }
        )
        .then((response) => {
          console.log("response.data", response.data);
          alert(`Added Dr ${response.data.name}`);
          setProviderData(response.data);
        })
        .catch((error) => {
          console.error(error);
          alert("Unknown Error");
        });
    }

    setShowProviderModal(false);
  };

  const handleProviderModalHide = () => {
    setShowProviderModal(false);
  };

  //

  var HRdata = [];
  var O2data = [];
  const [radioValue, setRadioValue] = useState("1"); //Default to HR Data
  const [radioValue2, setRadioValue2] = useState("1"); //Default to Day Time Window

  userData.vitals.sort((a, b) => {
    return a.time - b.time;
  });
  //using time from last recorded?

  var lastTime = Date.now();
  //lastTime = userData.vitals[userData.vitals.length - 1].time;
  //uncomment above to use the last vitals measurement as the cuttoff for graph & Table

  //console.log(lastTime);
  var cutoff;
  switch (radioValue2) {
    case "1":
      cutoff = 60 * 60 * 1000;
      break;
    case "2":
      cutoff = 24 * 60 * 60 * 1000;
      break;
    case "3":
      cutoff = 7 * 24 * 60 * 60 * 1000;
      break;
  }
  ///
  //console.log(radioValue2, cutoff);
  var vitals = userData.vitals.filter(
    (vital) => vital.time > lastTime - cutoff
  );

  //console.log(vitals);

  for (var i = 0; i < vitals.length; i++) {
    HRdata[i] = { x: new Date(vitals[i].time), y: vitals[i].HR };
    O2data[i] = { x: new Date(vitals[i].time), y: vitals[i].O2 };
  }

  //SORT by time so that it is decending
  vitals.sort((a, b) => b.time - a.time);

  const radios = [
    { name: "Heart Rate", value: "1" },
    { name: "O2 Sat.", value: "2" },
  ];
  const radios2 = [
    { name: "Hour", value: "1" },
    { name: "Day", value: "2" },
    { name: "Week", value: "3" },
  ];

  ///
  var timePeriod;
  switch (radioValue2) {
    case "1":
      timePeriod = "Hourly";
      break;
    case "2":
      timePeriod = "Daily";
      break;
    case "3":
      timePeriod = "Weekly";
      break;
  }

  var Yaxis = radioValue == 1 ? " BPM" : "% Sat.";
  var options = {
    //Canvas.js Chart Options
    animationEnabled: true,
    responsive: true,
    title: {
      text: `${
        radioValue == 1 ? "Heart Rate" : "O2 Saturation"
      } (${timePeriod})`,
    },
    axisX: {
      valueFormatString: timePeriod == "Weekly" ? "DDD hh:mm TT" : "hh:mm TT",
    },
    axisY: {
      title: Yaxis,
    },
    data: [
      {
        color: radioValue == 1 ? "#ea0016" : "#8b0000",
        xValueFormatString:
          timePeriod == "Weekly" ? "MM/DD hh:mm TT" : "hh:mm TT",
        yValueFormatString: `###'${Yaxis}'`,
        type: "spline",
        dataPoints: radioValue == 1 ? HRdata : O2data,
      },
    ],
  };

  function Download() {
    //Create a CSV of all data values
    var csvString = [["Date & Time", "Heart Rate", "O2 Saturation"]];
    var a = userData.vitals.map((item) => [
      new Date(item.time).toLocaleString("en-US").replace(",", ""),
      item.HR,
      item.O2,
    ]);
    console.log(a);
    csvString = csvString
      .concat(a)
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvString], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "UserVitals.csv";
    link.href = url;
    link.click();
  }

  //////Generate/Format Card Data (Averages & Latest Vitals)

  const c1val = userData.vitals[userData.vitals.length - 1]
    ? `${userData.vitals[userData.vitals.length - 1].HR} BPM`
    : "N/A";
  const C1 = {
    img: "heart-beat.svg",
    subtitle: "Heart Rate (Latest)",
    value: c1val,
    colSize: 7,
  };
  var cnt = 0;
  var avgHR = 0;
  var avgO2 = 0;
  vitals.forEach((element) => {
    //calculate averages
    avgHR += element.HR;
    avgO2 += element.O2;
    cnt++;
  });

  avgHR /= cnt;
  avgO2 /= cnt;
  avgHR = parseFloat(avgHR.toFixed(0));
  avgO2 = parseFloat(avgO2.toFixed(0));
  avgHR = vitals.length > 0 ? `${avgHR} BPM` : "N/A";
  avgO2 = vitals.length > 0 ? `${avgO2}% Sat.` : "N/A";
  const C2 = {
    img: "heart-beat.svg",
    subtitle: `AVG Heart Rate \n(${timePeriod})`,
    value: `${avgHR}`,
    colSize: 8,
  };
  const c3val = userData.vitals[userData.vitals.length - 1]
    ? `${userData.vitals[userData.vitals.length - 1].O2}% Sat.`
    : "N/A";
  const C3 = {
    img: "O2.png",
    subtitle: "O2 Saturation (Latest)",
    value: c3val,
    colSize: 7,
  };

  const C4 = {
    img: "O2.png",
    subtitle: `AVG O2 Saturation \n(${timePeriod})`,
    value: `${avgO2}`,
    colSize: 8,
  };

  const customToggleButtonStyle = {
    on: {
      backgroundColor: '#94a187',
      borderColor: '#94a187',
      color: 'white'
    },
    off: {
      backgroundColor: 'transparent',
      borderColor: '#94a187',
      color: '#94a187'
    }
  };

  //////
  return (
    <>
    <div style={{backgroundColor: '#e2e9e4', minHeight: '100vh', width: '100%'}}>
      <Navbar className="color-theme" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{fontFamily: 'var(--font-noto-serif-thai)'}}>
          <img src="/ventigatorlogo.png" className="ventigator-logo-nav"/>{' '}
            Airable {isProvider ? "Healthcare" : "Patient"}
          </Navbar.Brand>
          <Nav className="me-auto" style={{fontFamily: 'var(--font-mulish)'}}>
            <Nav.Link onClick={Download}>Export Data</Nav.Link>
            {!isProvider ? (
              <Nav.Link onClick={() => setShowProviderModal(true)}>
                Your Provider
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
          <Nav className="ml-auto" style={{fontFamily: 'var(--font-mulish)'}}>
            {!isProvider ? (
              <>
                <NavItem onClick={handleCopyUserId}>
                  <Nav.Link>Copy User ID</Nav.Link>
                </NavItem>
                <Nav.Link href="/Signout">Sign Out</Nav.Link>
              </>
            ) : (
              <Nav.Link onClick={() => window.location.reload()}>
                Return to Provider Portal
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      {showAlert && (
        <div
          className="alert alert-success position-fixed top-0 end-0 m-3"
          role="alert"
        >
          Copied!
        </div>
      )}
      <div>
        <h1 style={{ textAlign: "center" }}>
          {!isProvider
            ? `Hello ${userData.name}, Welcome to your Patient Portal!`
            : `You are viewing ${userData.name}'s Patient Portal!`}
        </h1>{" "}
        <br />
        <div>
          {/*<p>Provider data: {providerData}</p>*/}

          <ProviderModal
            show={showProviderModal}
            onHide={handleProviderModalHide}
            onSubmit={handleProviderModalSubmit}
            provider={providerData}
          />
          {/*setProviderData={setProviderData}*/}
        </div>
        <div>
          <Row>
            <Col sm={3}>
              <div>
                <br />
              </div>
              <div>
                <br />
              </div>
              <div>
                <br />
              </div>
              <div style={{ display: "flex", justifyContent: "center"}}>
                <ButtonGroup>
                  {radios2.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio2-${idx}`}
                      type="radio"
                      //variant="outline-primary" //{idx % 2 ? 'outline-info' : 'outline-primary'}
                      name="radio2"
                      value={radio.value}
                      checked={radioValue2 === radio.value}
                      onChange={(e) => setRadioValue2(e.currentTarget.value)}
                      style={radioValue2 === radio.value?customToggleButtonStyle.on:customToggleButtonStyle.off}
                    >
                      {radio.name}
                    </ToggleButton>
                  ))}
                </ButtonGroup>
              </div>
              <div>
                <br />
              </div>
              <div style={{ display: "flex", justifyContent: "center"}}>
                <ButtonGroup>
                  {radios.map((radio, idx) => (
                    <ToggleButton
                      key={idx}
                      id={`radio1-${idx}`}
                      type="radio"
                      variant={idx % 2 ? "outline-dark" : "outline-danger"}
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
              <br />
              <O2Saturation
                saturation={saturation}
                setSaturation={handleSaturationChange}
                isProvider={isProvider}
              />
            </Col>
            <Col sm={9}>
              <CanvasJSChart options={options} />
            </Col>
          </Row>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Row>
            <Col md={3} xs={12}>
              <MyCard options={C1} />
            </Col>
            <Col md={3} xs={12}>
              <MyCard options={C2} />
            </Col>
            <Col md={3} xs={12}>
              <MyCard options={C3} />
            </Col>
            <Col md={3} xs={12}>
              <MyCard options={C4} />
            </Col>
          </Row>
        </div>
      </div>
      </div>
    </>
  );
}
export default PatientSide;
