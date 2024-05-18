import React, { useState, useEffect } from 'react';
import VolNavbar from './VolNavbar';
import './VolDashboard.css';
import { Tabs, Tab } from 'react-bootstrap';
import CustomCard from '../../components/card/CustomCard';
import BackendService from '../../services/BackendService'; 
import NpoCustomCard from '../../components/card/NpoCustomCard'

const VolDashboard = () => {
    const backendService = new BackendService();
    const [opportunityData, setOpportunityData] = useState([]);


    const [scrapedOpportunities, setScrapedOpportunities] = useState([]);

    useEffect(() => {
        async function fetchOpportunities() {
            try {
                const opportunities = await backendService.fetchScrapedOpportunities(1,8);
                setScrapedOpportunities(opportunities);
            } catch (error) {
                console.error('Error fetching scraped opportunities:', error.message);
            }
        }
        fetchOpportunities();
    }, []); 



    // State to manage which content to display
    const [displayContent, setDisplayContent] = useState("cards");

    // Function to handle tab click events
    const handleTabSelect = (key) => {
        setDisplayContent(key);
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
        <div>
            {/* Use React Bootstrap Tabs component */}
            <Tabs activeKey={displayContent} onSelect={handleTabSelect} id="dashboard-tabs">
                <Tab eventKey="list" title="Kinect Opportunities">
                    {/* Render list content when "Show List" tab is active */}
                    <div className="kinect-opportunities">
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
                </Tab>
                <Tab eventKey="cards" title="Explore other Opportunities">
                    {/* Render cards when "Show Cards" tab is active */}
                    <div className="card-grid">
                        {scrapedOpportunities.map(card => (
                            <CustomCard
                                key={card.id}
                                imageUrl={card.imageUrl}
                                title={card.title}
                                description={card.description}
                                location={card.location}
                                organization={card.organization}
                                datePosted={card.datePosted}
                                schedule={card.schedule}
                                url={card.url}
                            />
                        ))}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default VolDashboard;
