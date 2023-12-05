import React from "react";
import { Badge, OverlayTrigger, Popover, Button } from "react-bootstrap";
import Copy from "./copyButton";

function ProviderCode(props) {
  //shows the provider's code in the health care dashboard and allow them to copy it
  const providerCode = props.code;

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Your Provider Code Is:</Popover.Header>
      <Popover.Body>
        <div className="d-flex align-items-center justify-content-between">
          <h1>
            <Badge bg="secondary">{providerCode}</Badge>
          </h1>
          <Copy value={providerCode} />
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success" style={{backgroundColor: '#69745e'}}>View Provider Code</Button>
    </OverlayTrigger>
  );
}

export default ProviderCode;
