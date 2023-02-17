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
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const cognitoUrl=process.env.REACT_APP_COGNITO_URL+process.env.REACT_APP_COGNITO_REDIRECT
const HCcognitoUrl=process.env.REACT_APP_HC_COGNITO_URL+process.env.REACT_APP_HC_COGNITO_REDIRECT
     
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
  