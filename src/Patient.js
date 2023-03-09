import "./App.css";
import "./custom-color.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientSide from "./PatientSide";
//
function Patient() {
  const domain = process.env.REACT_APP_API_DOMAIN; //"https://api.airable.org"//"http://localhost:8080"//process.env.REACT_APP_API_DOMAIN
  const cognitoUrl =
    process.env.REACT_APP_COGNITO_URL + process.env.REACT_APP_COGNITO_REDIRECT;
  const [patient, setPatient] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  var token;
  async function login() {
    const url = window.location.href;
    //console.log("tokenssss")
    //TRY GET
    token = url.substring(url.indexOf("=") + 1, url.indexOf("&"));
    //console.log("tok: ",token)
    if (!token) {
      token = localStorage.getItem("token");
    } else {
      localStorage.setItem("token", token);
    }
    console.log(token);

    //if(!localStorage.getItem("user"))
    try {
      //fetchUser(jwt_decode(token))
      axios.defaults.headers.common = { Authorization: `${token}` }; //BEARER
      const response = await axios.get(domain + "/login/patient");
      console.log(response.data);
      setPatient(response.data);
      //localStorage.setItem("userData", JSON.stringify(response.data[0]));
      console.log(patient);
      //navigate('/patient', response.data[0]);

      //
      return "user";
    } catch (error) {
      console.log(error);
      console.log("no token");

      window.location.replace(cognitoUrl); //RE-enable
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

  if (!isLoading && patient) {
    console.log(patient);
    return (
      <>
        <div>
          <PatientSide
            patient={patient}
            auth={token}
            providerPerspective={false}
          />
        </div>
      </>
    );
  } else return <div>Loading...</div>;
}
export default Patient;
