import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CustomCard({ imageUrl, organization, title, description, location, schedule, datePosted, url }) {
  return (
    <Card style={{ width: '18rem' }}>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card.Img 
          variant="top" 
          src={imageUrl} 
          style={{ 
            width: '150px', // Fixed width
            height: '150px', // Fixed height
            objectFit: 'cover', // Maintain aspect ratio and fill container
            borderRadius: '8px', // Border radius
            margin: '30px'
          }} 
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <hr />
        <Card.Text>{description}</Card.Text>
        <hr />
        <Card.Text><strong>Organization:</strong> {organization}</Card.Text>
        <hr />
        <Card.Text><strong>Location:</strong> {location}</Card.Text>
        <Card.Text><strong>Schedule:</strong> {schedule}</Card.Text>
        <Card.Text><strong>Date posted:</strong> {datePosted}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        {/* Anchor tag with href attribute set to the external URL */}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Know more</Button>
        </a>
      </Card.Footer>
    </Card>
  );
}

export default CustomCard;
