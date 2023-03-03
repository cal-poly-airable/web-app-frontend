import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
function Dev() {
  return (
    <div className="App">
      <Container>
        <form
          action={process.env.REACT_APP_API_DOMAIN + "/dev/upload"}
          encType="multipart/form-data"
          method="post"
        >
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="pass"
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
