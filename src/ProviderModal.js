import React, { useState,useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


function ProviderModal({ show, onHide, provider, setProviderData, onSubmit }) {
    const [providerCode, setProviderCode] = useState('');
  
    function handleSubmit(event) {
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
          setProviderCode('');
        }
      }, [provider]);
  
    const isProviderCodeEntered = providerCode.length > 0 || (provider &&provider.length>0);
  
    return (
        <Modal show={show} onHide={onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Provider Information</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              {provider ? (
                <div>
                  <p>Provider Code: {provider}</p>
                </div>
              ) : (
                <Form.Group>
                  <Form.Label>Enter Provider Code:</Form.Label>
                  <Form.Control type="text" placeholder="Provider Code" value={providerCode} onChange={(e) => setProviderCode(e.target.value)} />
                </Form.Group>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Cancel
              </Button>
              <Button variant={provider ? "danger" : "primary"} type="submit" disabled={!isProviderCodeEntered}>
                {provider ? 'Remove' : 'Submit'}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      );
              }      

  
  export default ProviderModal;
  