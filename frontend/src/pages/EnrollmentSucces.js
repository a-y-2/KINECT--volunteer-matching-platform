import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EnrollmentSuccess = () => {

  const navigate = useNavigate();


  const handleBack = () => {
    navigate('/dashboard-opportunities');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Alert variant="success" style={{ width: '50%', textAlign: 'center' }}>
        <Alert.Heading>Enrollment Successful!</Alert.Heading>
        <p>Your enrollment has been successfully processed.</p>
      </Alert>
      <Button variant="primary" onClick={handleBack} style={{ marginTop: '20px' }}>Back</Button>
    </div>
  );
};

export default EnrollmentSuccess;
