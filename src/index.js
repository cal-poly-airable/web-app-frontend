import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Patient from './Patient';
import Healthcare from './Healthcare';
import Signout from './Signout';
import Dev from './Dev';
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
//O2Saturation