import React from 'react';
import { Badge, OverlayTrigger, Popover,Button } from 'react-bootstrap';
import { useState } from 'react';
//import './ProviderCode.css';
import Copy from './copyButton';

function ProviderCode(props) {
  const providerCode = props.code; // Replace with your actual provider code
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(providerCode);
    setIsCopied(true);
  };
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Your Provider Code Is:</Popover.Header>
      <Popover.Body><div className="d-flex align-items-center justify-content-between">
        <h1>
          <Badge bg="secondary">{providerCode}</Badge> 
          </h1>
          <Copy value={providerCode}/></div>
        
       
        
      </Popover.Body>
    </Popover>
  );

  return (
<OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">View Provider Code</Button>
  </OverlayTrigger>
  );
}

export default ProviderCode;
