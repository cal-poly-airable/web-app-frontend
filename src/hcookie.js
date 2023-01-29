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

export default function HCookie() {
    const domain=process.env.REACT_APP_API_DOMAIN//"https://api.airable.org"//"http://localhost:8080"//process.env.REACT_APP_API_DOMAIN
    const cognitoUrl=process.env.REACT_APP_COGNITO_URL+process.env.REACT_APP_COGNITO_REDIRECT
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let user=""
    let userData=""
    async function fetchUser(user){
      try {
         console.log(user.sub)
         const response = await axios.get(domain+'/providers/'+user.sub);
         console.log("Respone:")
         console.log(response)
         const userList=response.data.users_list;
         if (userList.length<1){
         //user=localStorage.getItem("user")
            
          const account={name:user.given_name,_id:user.sub,subject:user.sub,userProfile:"Profile",patients: []} //change back to []
          //const account={name:user.name,subject:user.sub,userProfile:"Profile",latestVitals:"96 BPM",vitalHistory: [{time:"5PM", HR:"94 BPM"},{time:"6PM", HR:"97 BPM"}]}
          console.log(account)
          const resp=await axios.post(domain+'/providers',account)
          console.log(resp)
          localStorage.setItem("userData", JSON.stringify(account));
         }
         else{
          //user already in DB  a
          userData=userList[0]
          console.log(userData)
          localStorage.setItem("userData", JSON.stringify(userData));

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
       console.log(token)
       //if(!localStorage.getItem("user"))
       try {
        
        user= JSON.stringify(jwt_decode(token))
        localStorage.setItem("user", user);
        fetchUser(jwt_decode(token))
        
        //console.log(user)
        
        //
        return user
       }
       catch(error){
        console.log(error)
        console.log("no token")
       //window.location.replace(cognitoUrl);
    }
  
       }
       useEffect(() => {
        loginStatus().then(result=>console.log(result)).then( result => {
         //setTimeout(window.location.replace("/home"),500)
         window.setTimeout(function() {
            window.location.href = '/patient';
        }, 500);
         //
           })
       }, [] );


    return (
      <>
        <div>
            </div> </>
    );
  }
  