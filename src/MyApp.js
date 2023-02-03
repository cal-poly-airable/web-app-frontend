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
import Root from "./root";
import Oldhome from './oldhome';
import Healthcare from './Healthcare';
import Signout from './Signout';
import Dev from './Dev';
import Bruh from './Bruh';
import PatientView from './PatientView';
import Login from './login';

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
               path: "/healthcare/patient",
               element: <PatientView/>
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
            }
          ]);
          
          ReactDOM.createRoot(document.getElementById("root")).render(
            <React.StrictMode>
              <RouterProvider router={router} />
            </React.StrictMode>
          );
          
  }

const Home = () =>(
   <div><h1>Home Page</h1></div>
);

export default MyApp;
/** */