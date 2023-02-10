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
  Navigate,
} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



 function Login() {
   let navigate = useNavigate();
   const [data, setData] = useState(null);


    const [isLoading, setIsLoading] = useState(false);
    const domain=process.env.REACT_APP_API_DOMAIN//"https://api.airable.org"//"http://localhost:8080"//process.env.REACT_APP_API_DOMAIN
    const cognitoUrl=process.env.REACT_APP_COGNITO_URL+process.env.REACT_APP_COGNITO_REDIRECT
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    async function login(){
        const url=window.location.href
        const token=url.substring(
           url.indexOf("=") + 1, 
           url.indexOf("&")
       );
       //console.log(token)
       localStorage.setItem("token",token)
       //if(!localStorage.getItem("user"))
       try {
        //fetchUser(jwt_decode(token))
        axios.defaults.headers.common = {'Authorization': `${token}`} //BEARER
        const response = await axios.get(domain+'/login');
        console.log(response.data[0])
        setData(response.data[0]);
        //localStorage.setItem("userData", JSON.stringify(response.data[0]));
        console.log(response.data)
        //navigate('/patient', response.data[0]);
       
        //
        return response.data[0]
       }
       catch(error){
        console.log(error)
        console.log("no token")
        
       //window.location.replace(cognitoUrl);  
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


       if (data&&Array.isArray(data.vitals)) {
        console.log(data)
        navigate('/patient',  { state:  data }  )
      }
      
     
      return <div>Loading...</div>;
    }

    
  
  export default Login;
