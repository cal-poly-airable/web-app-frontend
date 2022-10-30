import Table from './Table'
import Form from './Form';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import UserPool from './UserPool';
import jwt_decode from "jwt-decode";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Nav from './Nav';
import Patient from './Patient'

export default function Oldhome() {
  const domain=process.env.REACT_APP_API_DOMAIN//"https://api.airable.org"
    const cognitoUrl="https://airable.auth.us-east-1.amazoncognito.com/login?client_id=2712iosied63rc2o6v1ig7sf0n&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri="+process.env.REACT_APP_COGNITO_REDIRECT
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    //const [searchParams, setSearchParams] = useSearchParams();
    //const domain="http://localhost:5000"
    const [characters, setCharacters] = useState([]);
    let user=""
    async function fetchAll(){
        try {
           const response = await axios.get(domain+'/users');
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
     
     try {
      user= JSON.stringify(jwt_decode(token))
      localStorage.setItem("user", user);
      return user
     }
     catch(error){
     window.location.replace(cognitoUrl);}

     }
     useEffect(() => {
      
      loginStatus().then(result=>console.log(result)).then(fetchAll().then( result => {
           if (result){
              setCharacters(result);}
         }))
     }, [] );

     async function makePostCall(person){
        try {
           const response = await axios.post(domain+'/users', person);
           return response;
        }
        catch (error) {
           console.log(error);
           return false;
        }
     }
     
      function removeOneCharacter (index) {
        const toRemove = characters.filter((character, i) => {
            return i === index
          });
        axios.delete(domain+'/users/'+toRemove[0]._id)
        const updated = characters.filter((character, i) => {
            return i !== index
          });
        
          setCharacters(updated);
        }
        function updateList(person) { 
            makePostCall(person).then( result => {
            if (result && result.status === 201)
            console.log(result)
            console.log("result.data")
               setCharacters([...characters, result.data] );
            });
         }
    return (
      <>
        <div className="container">
              <Table characterData={characters} removeCharacter={removeOneCharacter} />
              <Form handleSubmit={updateList} />
            </div> </>
    );
  }
  