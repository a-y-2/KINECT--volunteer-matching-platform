import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './CreateOpportunityModal.css'; // Import custom CSS for the modal

const CreateOpportunityModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      backdrop="static"
      keyboard={false}
      dialogClassName="custom-opp-modal" // Add a custom class for the modal dialog
    >
      <Modal.Header closeButton>
        <Modal.Title>Create Opportunity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add form fields for creating an opportunity */}
        <p>Dummy fields go here</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateOpportunityModal;
