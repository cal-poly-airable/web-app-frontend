import React, { useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import './custom-color.css';

function O2Saturation(props) {
  //Set/View O2 Saturation Component
  const [editing, setEditing] = useState(false);
  const [newSaturation, setNewSaturation] = useState("");

  const handleInputChange = (event) => {
    setNewSaturation(event.target.value);
  };

  const handleEditClick = () => {
    //Allow user to edit saturation
    setEditing(true);
  };

  const handleCancelClick = () => {
    //Reverts to Previously saved saturation
    setEditing(false);
    setNewSaturation("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newSaturation < 85 || newSaturation > 100) {
      //Target Saturation Data Validation
      alert("Please enter a valid saturation level between 85 and 100");
      setNewSaturation("");
    } else {
      props.setSaturation(newSaturation); //send newSat to function that will call the API to update the backend
      setNewSaturation("");
      setEditing(false);
    }
  };
  const isSubmitDisabled = newSaturation === "";
  return (
    <div className="saturation-box text-center">
      <h6 className="mb-3">Target O2 Saturation</h6>
      {editing ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="number"
              placeholder={props.saturation}
              min="85"
              max="100"
              value={newSaturation}
              onChange={handleInputChange}
            />
          </Form.Group>
          <br />
          <ButtonGroup>
            <Button
              variant="success"
              type="submit"
              className="mr-3"
              disabled={isSubmitDisabled}
            >
              Submit
            </Button>
            <Button variant="danger" onClick={handleCancelClick}>
              Cancel
            </Button>
          </ButtonGroup>
        </Form>
      ) : (
        <div className="update-button">
          <h1>{props.saturation}%</h1>
          {props.isProvider ? (
            <Button variant="--bs-primary" onClick={handleEditClick}>
              Update
            </Button>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default O2Saturation;
