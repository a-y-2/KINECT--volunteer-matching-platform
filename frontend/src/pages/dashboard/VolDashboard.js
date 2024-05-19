import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Pagination } from 'react-bootstrap';
import VolNavbar from './VolNavbar';
import './VolDashboard.css';
import CustomCard from '../../components/card/CustomCard';
import BackendService from '../../services/BackendService'; 
import NpoCustomCard from '../../components/card/NpoCustomCard';

const VolDashboard = () => {
    const backendService = new BackendService();
    const [opportunityData, setOpportunityData] = useState([]);
    const [scrapedOpportunities, setScrapedOpportunities] = useState([]);

    const [currentKinectPage, setCurrentKinectPage] = useState(1);
    const [currentScrapedPage, setCurrentScrapedPage] = useState(1);
    const [totalKinectPages, setTotalKinectPages] = useState(1);
    const [totalScrapedPages, setTotalScrapedPages] = useState(1);
    const itemsPerPage = 8; // Set the number of items per page

    // State to manage which content to display
    const [displayContent, setDisplayContent] = useState("list");

    // Function to handle tab click events
    const handleTabSelect = (key) => {
        setDisplayContent(key);
        if (key === "list") {
            setCurrentKinectPage(1); // Reset to the first page when switching tabs
        } else if (key === "cards") {
            setCurrentScrapedPage(1); // Reset to the first page when switching tabs
        }
    };

    // Fetch Kinect Opportunities
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await backendService.getAllNpoOpportunities();
                setOpportunityData(responseData);
                setTotalKinectPages(Math.ceil(responseData.length / itemsPerPage));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentKinectPage]);

    // Fetch Scraped Opportunities
    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                const opportunities = await backendService.fetchScrapedOpportunities(currentScrapedPage, itemsPerPage);
                setScrapedOpportunities(opportunities);
                const totalCount = await backendService.fetchScrapedOpportunitiesCount();
                setTotalScrapedPages(Math.ceil(totalCount / itemsPerPage));
            } catch (error) {
                console.error('Error fetching scraped opportunities count:', error.message);
            }
        };
        fetchOpportunities();
    }, [currentScrapedPage]);

    // Function to handle page changes for Kinect Opportunities
    const handleKinectPageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalKinectPages) {
            setCurrentKinectPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    

    // Function to handle page changes for Scraped Opportunities
    const handleScrapedPageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalScrapedPages) {
            setCurrentScrapedPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Calculate the items to display for the current page
    const getPaginatedItems = (items, currentPage) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <div>
            {/* <VolNavbar /> */}
            {/* Use React Bootstrap Tabs component */}
            <Tabs activeKey={displayContent} onSelect={handleTabSelect} id="dashboard-tabs">
                <Tab eventKey="list" title="Kinect Opportunities">
                    <div className="kinect-opportunities">
                        {getPaginatedItems(opportunityData, currentKinectPage).map(opportunity => (
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
                    <div className="pagination-container">
                        <Pagination>
                            <Pagination.Prev
                                onClick={() => handleKinectPageChange(currentKinectPage - 1)}
                                disabled={currentKinectPage === 1}
                            />
                            {[...Array(totalKinectPages).keys()].map(pageNumber => (
                                <Pagination.Item
                                    key={pageNumber + 1}
                                    active={pageNumber + 1 === currentKinectPage}
                                    onClick={() => handleKinectPageChange(pageNumber + 1)}
                                >
                                    {pageNumber + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => handleKinectPageChange(currentKinectPage + 1)}
                                disabled={currentKinectPage === totalKinectPages}
                            />
                        </Pagination>
                    </div>
                </Tab>
                <Tab eventKey="cards" title="Explore other Opportunities">
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
                    <div className="pagination-container">
                        <Pagination>
                            <Pagination.Prev
                                onClick={() => handleScrapedPageChange(currentScrapedPage - 1)}
                                disabled={currentScrapedPage === 1}
                            />
                            {[...Array(totalScrapedPages).keys()].map(pageNumber => (
                                <Pagination.Item
                                    key={pageNumber + 1}
                                    active={pageNumber + 1 === currentScrapedPage}
                                    onClick={() => handleScrapedPageChange(pageNumber + 1)}
                                >
                                    {pageNumber + 1}
                                </Pagination.Item>
                            ))}
                            <Pagination.Next
                                onClick={() => handleScrapedPageChange(currentScrapedPage + 1)}
                                disabled={currentScrapedPage === totalScrapedPages}
                            />
                        </Pagination>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default VolDashboard;
