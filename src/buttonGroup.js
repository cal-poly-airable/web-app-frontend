import { useState } from 'react';
import { Form } from 'react-bootstrap';

function RadioButtonSet() {
  const [selectedValue, setSelectedValue] = useState('option-1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }

  return (
    <Form>
      <Form.Group>
        <Form.Check
          type="radio"
          label="Heart Rate"
          name="radio-set"
          id="radio-1"
          value="option-1"
          checked={selectedValue === 'option-1'}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="O2 Saturation"
          name="radio-set"
          id="radio-2"
          value="option-2"
          checked={selectedValue === 'option-2'}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
    

  );
}


export default RadioButtonSet;