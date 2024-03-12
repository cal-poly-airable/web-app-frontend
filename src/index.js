import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patient from "./Patient";
import Healthcare from "./Healthcare";
import Signout from "./Signout";
import Dev from "./Dev";
//import Home from "./home";
import LandingPage from "./LandingPages/LandingPage";
import MobileApp from "./LandingPages/MobileApp";
import HistoryFrame from "./LandingPages/HistoryFrame";
import Contacts from "./LandingPages/Contacts";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const router = createBrowserRouter([
  //create/edit routes here
  /*{
    path: "/home",
    element: <Home />,
  },*/
  {
    path: "/",
    element: <LandingPage to="" />,
  },
  {
    path: "/app",
    element: <MobileApp to="" />,
  },
  {
    path: "/history",
    element: <HistoryFrame to="" />,
  },
  {
    path: "/contacts",
    element: <Contacts to="" />,
  },
  {
    path: "/patient",
    element: <Patient to="" />,
  },
  {
    path: "/healthcare",
    element: <Healthcare to="" />,
  },
  {
    path: "/signout",
    element: <Signout to="" />,
  },
  {
    path: "/dev",
    element: <Dev to="" />,
  },
]);

root.render(<RouterProvider router={router} />);
//O2Saturation
