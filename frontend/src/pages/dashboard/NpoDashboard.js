import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './NpoDashboard.css';
import BackendService from '../../services/BackendService';
import NpoCustomCard from '../../components/card/NpoCustomCard'

const NpoDashboard = () => {

  const [opportunityData, setOpportunityData] = useState([]);

  const handleCreateOpportunity = () => {
    // Add your logic for creating an opportunity here
    console.log("Creating opportunity...");
  };


  useEffect(() => {
    const backendService = new BackendService(); // Create an instance of BackendService

    const fetchData = async () => {
      try {
        const opportunityData = {}; // Assuming you have npoData to pass
        const responseData = await backendService.getAllNpo(); // Call the getAllNpo method
        setOpportunityData(responseData); // Assuming the response data is an array
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* Render each opportunity using CustomCard component */}
        {opportunityData.map(opportunity => (
          <NpoCustomCard
            key={opportunity._id}
            title={opportunity.title}
            description={opportunity.description}
            skillsRequired={opportunity.skillsRequired}
            startDate={opportunity.startDate}
            endDate={opportunity.endDate}
            location={opportunity.location}
            contactEmail={opportunity.contactEmail}
            website={opportunity.website}
          />
        ))}
      </div>
      
      <Button 
        variant="primary" 
        style={{ 
          position: 'absolute', 
          bottom: '20px',
          left: '50%', // Center the button horizontally
          transform: 'translateX(-50%)',
          marginTop: '150px' 
        }} 
        onClick={handleCreateOpportunity}
      >
        Create Opportunity
      </Button>
    </div>
    
  );
};

export default NpoDashboard;
