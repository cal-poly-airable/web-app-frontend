import { Navbar,Nav, Card } from 'react-bootstrap';
import Bruh from './Bruh.js';
import 'bootstrap/dist/css/bootstrap.min.css';


//HC

import Accordion from 'react-bootstrap/Accordion';
import BasicExample from './BasicExample.js';
import Container from 'react-bootstrap/Container';
function Healthcare() { 
return (<>
<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Airable Healthcare</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Signout">Sign Out</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    <div>
    <div><br /></div>
    <h1 style={{textAlign: 'center'}} >Hello Yoel, welcome to your Healthcare Provider Portal!</h1> <br/> 
    </div>
    <div>
    <BasicExample/></div>
    
    </>
)

}
export default Healthcare;