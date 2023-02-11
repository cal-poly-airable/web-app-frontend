import { Navbar,Nav, Card } from 'react-bootstrap';
import Bruh from './Bruh.js';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'
import './custom-color.css'
import { CanvasJSChart } from 'canvasjs-react-charts'
import Form from './Form';
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
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

import { useLocation,useParams } from 'react-router-dom';
//HC

import Accordion from 'react-bootstrap/Accordion';
import BasicExample from './BasicExample.js';

function Healthcare() { 


  const domain=process.env.REACT_APP_API_DOMAIN//"https://api.airable.org"//"http://localhost:8080"//process.env.REACT_APP_API_DOMAIN
  const cognitoUrl=process.env.REACT_APP_COGNITO_URL+process.env.REACT_APP_HC_COGNITO_REDIRECT
  const queryString = window.location.search;
  const { state } = useLocation();
  const [provider, setProvider] = useState(null);
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
    const response = await axios.get(domain+'/login/healthcare');
    console.log(response.data)
    setProvider(response.data);
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






   useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await login();
      setIsLoading(false);
      
      

    }
    fetchData();
  }, []);

  if(!isLoading&&provider){
  console.log(provider)
  return (
    <>
      <div><BasicExample provider={provider}/></div>

     </>
  
  );}
  else 
  return <div>Loading...</div>;
}

export default Healthcare;