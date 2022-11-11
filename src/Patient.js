
import './App.css'
import {CanvasJSChart} from 'canvasjs-react-charts'
import Table from './Table'
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

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Patient() { 
    let user=JSON.parse(localStorage.getItem("user"))
    let userData=JSON.parse(localStorage.getItem("userData"))
    var HRdata=[]
    for (var i=Math.max(userData.vitals.length,12)-12;i<userData.vitals.length;i++){
      var element=userData.vitals[i]
      HRdata.push({x:new Date(element.time),y:element.HR})
    }
    console.log("HRdata")
    console.log(HRdata)
		var options = {
			animationEnabled: true,
			title:{
				text: "Heart Rate (Last 60 Minutes)"
			},
			axisX: {
				valueFormatString: "hh:mm TT",
			},
			axisY: {
				title: "BPM",
				
			},
			data: [{
				xValueFormatString: "HH:mm TT",
        yValueFormatString: "### 'BPM'",
				type: "spline",
				dataPoints: HRdata
			}]
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
             
               
             
           })
       }, [] );


    return (
      <>
        <div>Hello {userData.name} welcome to your Patient Portal <br/> {JSON.stringify(userData)}
        <CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
            </div> </>
    );
}
export default Patient;