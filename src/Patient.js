
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

function Patient() { 
    const domain=process.env.REACT_APP_API_DOMAIN
    let user=JSON.parse(localStorage.getItem("user"))
    let userData=JSON.parse(localStorage.getItem("userData"))
    var HRdata=[]

    userData.vitals.sort((a, b) => {
      return a.time - b.time;
  });

    for (var i=Math.max(userData.vitals.length,12)-12;i<userData.vitals.length;i++){
      var element=userData.vitals[i]
      HRdata.push({x:new Date(element.time),y:element.HR})
    }

    
    console.log("HRdata")
    console.log(HRdata)
		var options = {
			animationEnabled: true,
			title:{
				text: "Heart Rate"
			},
			axisX: {
				valueFormatString: "hh:mm TT",
			},
			axisY: {
				title: "BPM",
				
			},
			data: [{
				xValueFormatString: "hh:mm TT",
        yValueFormatString: "### 'BPM'",
				type: "spline",
				dataPoints: HRdata
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
            <Nav.Link href="/Signout">Sign Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>





        <div><h1 style={{textAlign: 'center'}} >Hello {userData.name}, welcome to your Patient Portal!</h1> <br/> 
        <div>
        
          
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
  <Row>
    
    <Col sm={2}>
      <ListGroup>
        <ListGroup.Item action href="#link1">
          Hour
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Day
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Week
        </ListGroup.Item>
      </ListGroup>
      
      <Toggle/>
      
    </Col>
    <Col sm={10}>
        <CanvasJSChart options = {options}/* onRef={ref => this.chart = ref} *//>

    </Col>
  </Row>
</Tab.Container>      

          
          
          
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