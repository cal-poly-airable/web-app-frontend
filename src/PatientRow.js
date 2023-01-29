
import './App.css'
import './custom-color.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

//
function PatientRow(props) { 
    return (
<tr>
          <td className="text-center align-middle">{props.idx}</td>
          <td className="text-center align-middle">{props.patient.name}</td>
          <td className="text-center align-middle" >{props.patient.userID}</td>
          <td className="text-center align-right">
            
            <ButtonGroup>
            <Button size="sm" variant="primary">View Patient Data</Button><Button size="sm" variant="danger">Remove Patient</Button>
            </ButtonGroup>
            </td>
        </tr>
    );
}
export default PatientRow;