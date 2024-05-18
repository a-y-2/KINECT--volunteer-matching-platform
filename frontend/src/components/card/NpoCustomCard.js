import React from 'react';
import './NpoCustomCard.css'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NpoCustomCard({ skillsRequired, title, description, startDate, endDate, location, contactEmail, website }) {

  const navigate = useNavigate();

  const handleEnroll = () => {
    navigate('/enrollment-success');
  };
  
  return (
    <div className="custom-card-wrapper">
    <Card className="custom-card" >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>{description}</Card.Text>
        {/* <hr />
        <Card.Text><strong>Organization:</strong> {organization}</Card.Text> */}
        <hr />
        <Card.Text>
          <strong>Skills required:</strong> 
          {Array.isArray(skillsRequired) ? (
            skillsRequired.map((skill, index) => (
              <span key={index}> {skill}{index !== skillsRequired.length - 1 ? ',' : ''}</span>
            ))
          ) : (
            <span>No skills required</span> // Handle non-array case
          )}
        </Card.Text>
        <Card.Text><strong>Location:</strong> {location}</Card.Text>
        {/* <Card.Text><strong>Schedule:</strong> {schedule}</Card.Text> */}
        <Card.Text><strong>Start Date: </strong> {startDate}</Card.Text>
        <Card.Text><strong>End Date: </strong> {endDate}</Card.Text>
        <Card.Text><strong>Contact Email: </strong> {contactEmail}</Card.Text>
        <Card.Text><strong>Website: </strong> {website}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        {/* Anchor tag with href attribute set to the external URL */}
          <Button variant="primary" onClick={handleEnroll}>Enroll</Button>
      </Card.Footer>
    </Card>
    </div>
  );
}

export default NpoCustomCard;
