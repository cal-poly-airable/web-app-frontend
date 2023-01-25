import logo from './logo.svg';
import './App.css';
import UserPool from './UserPool';
import React, {useState} from 'react';


function Dev() {
  return (
    <div className="App">

  <form  action={process.env.REACT_APP_API_DOMAIN+"/dev/upload"} encType="multipart/form-data" method="post">
    <div className="form-group">
      
      <input
        type="password"
        className="form-control"
        placeholder="Enter Password"
        name="pass"
      />
      <input type="file" className="form-control-file" name="file" />
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
