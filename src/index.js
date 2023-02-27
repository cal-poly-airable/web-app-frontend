import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import MyApp from './MyApp';
import Root from "./root";
import Patient from './Patient';
import Healthcare from './Healthcare';
import Signout from './Signout';
import Dev from './Dev';
import Login from './login';
import Oldhome from './oldhome';
import Home from './home'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/patient",
    element: <Patient />,
  },
  {
    path: "/healthcare",
    element: <Healthcare />,
  },
  {
    path: "/oldhome",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signout",
    element: <Signout />
  },
  {
    path: "/dev",
    element: <Dev />
  }
]);

root.render(

    <RouterProvider router={router} />
);
