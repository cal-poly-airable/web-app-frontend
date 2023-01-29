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
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const cognitoUrl="https://airable.auth.us-east-1.amazoncognito.com/login?client_id=2712iosied63rc2o6v1ig7sf0n&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri="+window.location+"cookie"
const HCcognitoUrl="https://airablehealth.auth.us-east-1.amazoncognito.com/login?client_id=2gv8s3nl6ned8tc7rd1iio93kp&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri="+window.location+"cookie"
     
export default function Root() {
    return (
      <>
        <div>


  <Row>
        <Col>  <Button href={HCcognitoUrl} size="lg" variant="danger">Healthcare
  </Button></Col>
        <Col>Welcome to Airable</Col>
        <Col>  <Button href={cognitoUrl}  size="lg" variant="success">
    Patient
  </Button></Col>
      </Row>
            </div> </>
    );
  }
  