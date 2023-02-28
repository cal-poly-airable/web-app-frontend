import logo from './logo.svg';
import './App.css';
import UserPool from './UserPool';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import bcrypt from 'bcryptjs-react';

function Dev() {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Hash the password before submitting it to the API
    bcrypt.hash(password, 10)
      .then(hashedPassword => {
        const formData = new FormData();
        formData.append('pass', hashedPassword);
        formData.append('file', event.target.file.files[0]);

        fetch(process.env.REACT_APP_API_DOMAIN + '/dev/upload', {
          method: 'POST',
          body: formData
        }).then(response => {
          // handle response from server
        }).catch(error => {
          // handle error
        });
      });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <Container>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="pass"
              value={password}
              onChange={handlePasswordChange}
            />
            <input type="file" className="form-control-file" name="file" />
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Dev;
