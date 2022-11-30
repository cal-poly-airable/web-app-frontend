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

export default function Cookie() {
    const domain=process.env.REACT_APP_API_DOMAIN//"https://api.airable.org"//"http://localhost:8080"//process.env.REACT_APP_API_DOMAIN
    const cognitoUrl=process.env.REACT_APP_COGNITO_URL+process.env.REACT_APP_COGNITO_REDIRECT
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let user=""
    let userData=""
    async function fetchUser(user){
      try {
         console.log(user.sub)
         const response = await axios.get(domain+'/users/'+user.sub);
         console.log("Respone:")
         console.log(response)
         const userList=response.data.users_list;
         if (userList.length<1){
         //user=localStorage.getItem("user")
            const dummyArray=[{time:Date.now(), HR:94, O2:88},{time:Date.now()-300000, HR:12, O2:18},{time:Date.now()-600000, HR:112, O2:18},
               {time:Date.now()-3*300000, HR:112, O2:18},
               {time:Date.now()-4*300000, HR:76, O2:18},
               {time:Date.now()-5*300000, HR:112, O2:18},
               {time:Date.now()-6*300000, HR:80, O2:18},
               {time:Date.now()-7*300000, HR:90, O2:18},
               {time:Date.now()-8*300000, HR:96, O2:18},
               {time:Date.now()-9*300000, HR:32, O2:18},
               {time:Date.now()-10*300000, HR:112, O2:18},
               {time:Date.now()-11*300000, HR:122, O2:18},
               {time:Date.now()-12*300000, HR:112, O2:18},
               {time:Date.now()-13*300000, HR:112, O2:18},
               {time:Date.now()-14*300000, HR:82, O2:18},
               {time:Date.now()-15*300000, HR:112, O2:18},
               {time:Date.now()-16*300000, HR:112, O2:18},
               {time:Date.now()-17*300000, HR:82, O2:18},
               {time:Date.now()-18*300000, HR:50, O2:18},
               {time:Date.now()-19*300000, HR:2, O2:18},         
            ]
          const account={name:user.given_name,_id:user.sub,subject:user.sub,userProfile:"Profile",vitals: dummyArray} //change back to []
          //const account={name:user.name,subject:user.sub,userProfile:"Profile",latestVitals:"96 BPM",vitalHistory: [{time:"5PM", HR:"94 BPM"},{time:"6PM", HR:"97 BPM"}]}
          console.log(account)
          const resp=await axios.post(domain+'/users',account)
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
  