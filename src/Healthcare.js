import { Navbar,Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import './custom-color.css'
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { useLocation,useParams } from 'react-router-dom';
//HC

import Accordion from 'react-bootstrap/Accordion';
import HealthcareView from './HealthcareView.js';

function Healthcare() { 


  const domain=process.env.REACT_APP_API_DOMAIN//"https://api.airable.org"//"http://localhost:8080"//process.env.REACT_APP_API_DOMAIN
  const HCcognitoUrl=process.env.REACT_APP_HC_COGNITO_URL+process.env.REACT_APP_HC_COGNITO_REDIRECT
  const [provider, setProvider] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  var token;


  async function login(){
    const url=window.location.href
    //TRY GET
    token=url.substring(
      url.indexOf("=") + 1, 
      url.indexOf("&"));
    if (!token){
      token=localStorage.getItem(token)
  }
  else{
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
    
   window.location.replace(HCcognitoUrl);  
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
      <div><HealthcareView provider={provider}/></div>

     </>
  
  );}
  else 
  return <div>Loading...</div>;
}

export default Healthcare;