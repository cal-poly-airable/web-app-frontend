
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
import { Navbar, Nav, Card } from 'react-bootstrap';
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
import PatientSide from './PatientSide';
import Healthcare from './Healthcare'

import { useLocation,useParams } from 'react-router-dom';
//
function Patient(props) {

  const domain=process.env.REACT_APP_API_DOMAIN//"https://api.airable.org"//"http://localhost:8080"//process.env.REACT_APP_API_DOMAIN
  const cognitoUrl=process.env.REACT_APP_COGNITO_URL+process.env.REACT_APP_COGNITO_REDIRECT
  const queryString = window.location.search;
  const { state } = useLocation();
  const [patient, setPatient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  async function login(){
    const url=window.location.href
    //TRY GET
    var token=localStorage.getItem("token")
    if (!token){
    token=url.substring(
       url.indexOf("=") + 1, 
       url.indexOf("&")
       
   );
   localStorage.setItem("token",token)
  }
   //console.log(token)

   //if(!localStorage.getItem("user"))
   try {
    //fetchUser(jwt_decode(token))
    axios.defaults.headers.common = {'Authorization': `${token}`} //BEARER
    const response = await axios.get(domain+'/login/patient');
    console.log(response.data)
    setPatient(response.data);
    //localStorage.setItem("userData", JSON.stringify(response.data[0]));
    console.log(response.data)
    //navigate('/patient', response.data[0]);
   
    //
    return "user"
   }
   catch(error){
    console.log(error)
    console.log("no token")
    
   window.location.replace(cognitoUrl);  
}

   }


  

  //////REFRESH
  /*
  async function refreshData() {
    const response = await axios.get(domain + '/users/' + user.sub);
    console.log("Refreshed Respone:")
    console.log(response)
    var userList = response.data.users_list;
    userData = userList[0]
    console.log(userData)
    localStorage.setItem("userData", JSON.stringify(userData));
  }*/

  ////////

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await login();
      setIsLoading(false);
      
      

    }
    fetchData();
  }, []);

  if(!isLoading&&patient){
  console.log(patient)
  return (
    <>
      <div><PatientSide patient={patient}/></div>

     </>
  
  );}
  else 
  return <div>Loading...</div>;
}
export default Patient;