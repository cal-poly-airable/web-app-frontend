
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
    
		const options = {
			animationEnabled: true,
			title:{
				text: "Heart Rate (Last 60 Minutes)"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "Sales (in USD)",
				prefix: "$"
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 25060 },
					{ x: new Date(2017, 1), y: 27980 },
					{ x: new Date(2017, 2), y: 42800 },
					{ x: new Date(2017, 3), y: 32400 },
					{ x: new Date(2017, 4), y: 35260 },
					{ x: new Date(2017, 5), y: 33900 },
					{ x: new Date(2017, 6), y: 40000 },
					{ x: new Date(2017, 7), y: 52500 },
					{ x: new Date(2017, 8), y: 32300 },
					{ x: new Date(2017, 9), y: 42000 },
					{ x: new Date(2017, 10), y: 37160 },
					{ x: new Date(2017, 11), y: 38400 }
				]
			}]
		}
    let user=JSON.parse(localStorage.getItem("user"))
    let userData=JSON.parse(localStorage.getItem("userData"))
    async function fetchUser(sub){
        try {
           const response = await axios.get(domain+'/users/'+sub);
           console.log("hi")
           console.log(response)
           const userList=response.data.users_list;
           if (userList.length<1){
            const account={name:user.name,subject:user.sub,userProfile:"Profile",entries:"Diary Entries"}
            console.log(account)
            const resp=await axios.post(domain+'/users',account)
            console.log(resp)
           }
           else{
            //user already in DB
            userData=userList[0]
            console.log(userData)

           }
           return response.data.users_list;
        }
        catch (error){
           //We're not handling errors. Just logging into the console.
           console.log(error); 
           return false;         
        }
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
             if (result){}
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