import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function ProviderModal({ show, onHide, provider, onSubmit }) { 
  //Modal that launches on click to link your account to a provider or show/delete the linked provider if one is already linked
  const [providerCode, setproviderCode] = useState("");

  function handleSubmit(event) { //Not Being used and is actually being overriten in PatientSide.js
    event.preventDefault();
    if (provider) {
      onSubmit(providerCode);
    } else {
      onSubmit(providerCode);
    }
    onHide();
  }

  useEffect(() => {
    if (provider) {
      setproviderCode("");
    }
  }, [provider]);

  const isproviderCodeEntered = providerCode || (provider && provider.code);
  const isProvider = provider && provider.code;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Provider Information</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {isProvider ? (
            <div>
              <p>
                <b>Provider Name:</b> {provider.name}
              </p>
              <p>
                <b>Provider Email:</b>{" "}
                <a href={`mailto:${provider.email}`}>{provider.email}</a>
              </p>
              <p>
                <b>Provider Code:</b> {provider.code}
              </p>
            </div>
          ) : (
            <Form.Group>
              <Form.Label>Enter Provider Code:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Provider Code"
                value={providerCode}
                onChange={(e) => setproviderCode(e.target.value)}
              />
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button
            variant={isProvider ? "danger" : "primary"}
            type="submit"
            disabled={!isproviderCodeEntered}
          >
            {isProvider ? "Remove" : "Submit"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ProviderModal;
