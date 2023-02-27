import Table from './Table'
import Form from 'react-bootstrap/Form';
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
import Root from "./root";
import Oldhome from './oldhome';
import Healthcare from './Healthcare';
import Signout from './Signout';
import Dev from './Dev';
import Login from './login';
import Home from './home'

function MyApp() {

   
    
            
         const router = createBrowserRouter([
            {
              path: "/",
              element: <Root/>,
            },{
               path: "/patient",
               element: <Patient/>,
             },
             {
               path: "/healthcare",
               element: <Healthcare/>,
             },
             {
               path: "/oldhome",
               element: <Oldhome/>,
             },{
              path: "/login",
              element: <Login/>,
            },{
              path: "/signout",
              element: <Signout/>
            },
            {
              path: "/dev",
              element: <Dev/>
            },
            {
              path: "/home",
              element: <Home/>
            }
          ]);
          
          ReactDOM.createRoot(document.getElementById("root")).render(
            <React.StrictMode>
              <RouterProvider router={router} />
            </React.StrictMode>
          );
          
  }


export default MyApp;
/** */