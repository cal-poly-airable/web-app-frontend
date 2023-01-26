
import './App.css'
import {CanvasJSChart} from 'canvasjs-react-charts'
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap';
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
import Toggle from './toggle.js'


//
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

//
function Patient() { 
    const domain=process.env.REACT_APP_API_DOMAIN
    let user=JSON.parse(localStorage.getItem("user"))
    let userData=JSON.parse(localStorage.getItem("userData"))
    var HRdata=[]
    var O2data=[]
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const [radioValue2, setRadioValue2] = useState('1');

    userData.vitals.sort((a, b) => {
      return a.time - b.time;
  });
    //using time from last recorded?
    
    
      /// SET Options dont calculate based on button!!
      var lastTime=userData.vitals[userData.vitals.length-1].time
      lastTime=Date.now()
      console.log(lastTime)
      var cutoff;
      switch(radioValue2){
        case "1":
        cutoff=(60*60*1000)
        break;
        case "2":
          cutoff=(24*60*60*1000)
          break;
        case "3":
          cutoff=(7*24*60*60*1000)
          break;
      }
    ///
    //I need to filter and map
    console.log(radioValue2,cutoff)
    var vitals=userData.vitals.filter(vital=>vital.time>lastTime-cutoff)
    
    //HRdata=HRdata.map({element: s, el:t }->{x:new Date(element.time),y:element.O2})


    for (var i=0;i<vitals.length;i++){
      HRdata[i]=({x:new Date(vitals[i].time),y:vitals[i].HR})
      O2data[i]=({x:new Date(vitals[i].time),y:vitals[i].O2})
    }

  const radios = [
    { name: 'Heart Rate', value: '1' },
    { name: 'O2 Saturation', value: '2' },
  ];
  const radios2 = [
    { name: 'Hour', value: '1' },
    { name: 'Day', value: '2' },
    { name: 'Week', value: '3' },
  ];



    ///
    var timePeriod;
    switch(radioValue2){
      case "1":
        timePeriod="Hourly"
      break;
      case "2":
        timePeriod="Daily"
        break;
      case "3":
        timePeriod="Weekly"
        break;
    }

    //do x value format
    var Yaxis=(radioValue==1)?"BPM":"% Sat."
		var options = {
			animationEnabled: true,
      
			title:{
				text: `${(radioValue==1)?"Heart Rate":"O2 Saturation"} (${timePeriod})`
			},
			axisX: {
				valueFormatString: (timePeriod=="Weekly")?"DDD hh:mm TT":"hh:mm TT",
			},
			axisY: {
				title: Yaxis,
				
			},
			data: [{
        color: (radioValue==1)?"#007bff":"#17a2b8",
				xValueFormatString: (timePeriod=="Weekly")?"MM/DD hh:mm TT":"hh:mm TT",
        yValueFormatString: `### '${Yaxis}'`,
				type: "spline",
				dataPoints: (radioValue==1)?HRdata:O2data
			}]
		}
    async function refreshData(){
      const response = await axios.get(domain+'/users/'+user.sub);
         console.log("Refreshed Respone:")
         console.log(response)
          var userList=response.data.users_list;
         userData=userList[0]
         console.log(userData)
         localStorage.setItem("userData", JSON.stringify(userData));
    }
    function alertClicked() {
      alert('You clicked the third ListGroupItem');
    }
    
    async function loginStatus(){
        const url=window.location.href
        const token=url.substring(
           url.indexOf("=") + 1, 
           url.indexOf("&")
       );
       console.log(url)
       if(!localStorage.getItem("user"))
       try {
        user= JSON.stringify(jwt_decode(token))
        localStorage.setItem("user", user);
        //window.location.replace("/home")
        return user
       }
       catch(error){
       window.location.replace(cognitoUrl);}
  
       }
       useEffect(() => {
        
        loginStatus().then(result=>console.log(result)).then( result => {
             refreshData()
               
             
           })
       }, [] );

//{JSON.stringify(userData)} put back in div
    return (
      <>
<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Airable Patient</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/profile">Patient Profile</Nav.Link>
          <Nav.Link href="/export">Export Data</Nav.Link>
            <Nav.Link href="/Signout">Sign Out</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>





        <div><h1 style={{textAlign: 'center'}} >Hello {userData.name}, welcome to your Patient Portal!</h1> <br/> 
        <div>
        
          
          
  <Row>
    
    <Col sm={2}>

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
      </ButtonGroup>






      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio1-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-info' : 'outline-primary'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      
    </Col>
    <Col sm={10}>
        <CanvasJSChart options = {options}/* onRef={ref => this.chart = ref} *//>

    </Col>
  </Row>
    

          
          
          
          </div><div>
              <Table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Heart Rate (BPM)</th>
              <th>O2 Saturation (%)</th>
            </tr>
          </thead>
          <tbody>
            {userData.vitals.map(arrayData=>{
            return(
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
export default Patient;