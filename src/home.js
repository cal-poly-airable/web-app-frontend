import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

function Home() {
  const primaryColor = '#1abc9c'; // Tealish green color from your logo
  const cognitoUrl=process.env.REACT_APP_COGNITO_URL+process.env.REACT_APP_COGNITO_REDIRECT
  const HCcognitoUrl=process.env.REACT_APP_HC_COGNITO_URL+process.env.REACT_APP_HC_COGNITO_REDIRECT

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://d3oia8etllorh5.cloudfront.net/us-east-1_2nErCCJnl/ALL/20221026062015/assets/images/image.jpg" alt="Airable Logo" />
        <h1>Airable</h1>
        <p>Your Portable Partner for Healthy Breathing</p> {/*Your portable respiratory partner.*/}
        <Container>
          <Row>
            <Col>
              <Button href={HCcognitoUrl}
                className="App-button-provider"
                style={{ backgroundColor: 'white', color: primaryColor, border: `2px solid ${primaryColor}`, marginRight: '20px' }}
              >
                Healthcare Provider Login
              </Button>
            </Col>
            <Col>
              <Button href={cognitoUrl}
                className="App-button-patient"
                style={{ backgroundColor: primaryColor, border: `2px solid ${primaryColor}`}}
              >
                Patient Login
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default Home;
