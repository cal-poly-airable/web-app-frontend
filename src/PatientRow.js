import "./App.css";
import "./custom-color.css";
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

//
function PatientRow(props) {
  const handleViewData = () => {
    props.onViewData(props.patient.userID);
  };

  const handleRemovePatient = () => {
    props.onRemovePatient(props.patient.userID);
  };
  const id = props.patient.userID;
  const uId = "****" + id.substring(id.length - 4);
  return (
    <tr>
      <td className="text-center align-middle">{props.idx}</td>
      <td className="text-center align-middle">{props.patient.name}</td>
      <td className="text-center align-middle">{uId}</td>
      <td className="text-center align-middle">{props.patient.email}</td>
      <td className="text-center align-middle">
        {" "}
        {/*used to be align right */}
        <ButtonGroup>
          <Button size="sm" variant="primary" onClick={handleViewData}>
            View Patient Data
          </Button>
          <Button size="sm" variant="danger" onClick={handleRemovePatient}>
            Remove Patient
          </Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}
export default PatientRow;
