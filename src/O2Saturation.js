import React, { useState } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';

function O2Saturation(props) {
  const [editing, setEditing] = useState(false);
  const [newSaturation, setNewSaturation] = useState("");

  const handleInputChange = (event) => {
    setNewSaturation(event.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setNewSaturation("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newSaturation < 85 || newSaturation > 100) {
      alert("Please enter a valid saturation level between 85 and 100");
      setNewSaturation("");
    } else {
      props.setSaturation(newSaturation);
      setNewSaturation("");
      setEditing(false);
    }
  };
  const isSubmitDisabled = newSaturation === "";
  return (
    <div className="saturation-box text-center">
      <h6 className="mb-3">Target O2 Saturation</h6>
      {editing ?
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
          </Form.Group><br/>
          <ButtonGroup>
            <Button variant="success" type="submit" className="mr-3" disabled={isSubmitDisabled}>Submit</Button>
            <Button variant="danger" onClick={handleCancelClick}>Cancel</Button>
          </ButtonGroup>
        </Form>
        :
        <div>
          <h1>{props.saturation}%</h1>
          {(props.isProvider)?
          <Button variant="primary" onClick={handleEditClick}>Edit</Button>:null}
        </div>
      }
    </div>
  );
}

export default O2Saturation;
