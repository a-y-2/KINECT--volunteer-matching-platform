import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import './NpoDashboard.css';
import BackendService from '../../services/BackendService';
import NpoCustomCard from '../../components/card/NpoCustomCard';
import CreateOpportunityModal from '../../components/modal/CreateOpportunityModal';

const NpoDashboard = () => {
  const [opportunityData, setOpportunityData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCreateOpportunity = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const backendService = new BackendService();

    const fetchData = async () => {
      try {
        const responseData = await backendService.getAllNpoOpportunities();
        console.log(responseData);
        setOpportunityData(responseData || []); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setOpportunityData([]); // Set to an empty array on error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {opportunityData.length > 0 ? (
          opportunityData.map(opportunity => (
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
          ))
        ) : (
          <p>No opportunities available</p>
        )}
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

      <CreateOpportunityModal showModal={showModal} handleCloseModal={handleCloseModal} />
    </div>
  );
};

export default NpoDashboard;
