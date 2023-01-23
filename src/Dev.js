import logo from './logo.svg';
import './App.css';
import UserPool from './UserPool';
import React, {useState} from 'react';


function Dev() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  <form  action={process.env.REACT_APP_API_DOMAIN+"/dev/upload"} encType="multipart/form-data" method="post">
    <div className="form-group">
      <input type="file" className="form-control-file" name="file" />
      <input
        type="text"
        className="form-control"
        placeholder="Doesnt Do Anything"
        name="Filename"
      />
      <input
        type="submit"
        className="btn btn-default"
      />
    </div>
  </form>
    </div>
    
  );
}

export default Dev;
