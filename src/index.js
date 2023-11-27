import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patient from "./Patient";
import Healthcare from "./Healthcare";
import Signout from "./Signout";
import Dev from "./Dev";
//import Home from "./home";
import LandingPage from "./LandingPage";
import MobileApp from "./MobileApp";
import HistoryFrame from "./HistoryFrame";
import Contacts from "./Contacts";

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
    element: <LandingPage />
  },
  {
    path: "/app",
    element: <MobileApp />
  },
  {
    path: "/history",
    element: <HistoryFrame />
  },
  {
    path: "/contacts",
    element: <Contacts />
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
    element: <Signout />,
  },
  {
    path: "/dev",
    element: <Dev />,
  },
]);

root.render(<RouterProvider router={router} />);
//O2Saturation
