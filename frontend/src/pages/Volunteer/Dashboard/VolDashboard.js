import React from 'react';
import VolNavbar from './VolNavbar'; // Import your VolNavbar component
import Footer from '../../../components/footer/Footer'; // Import your Footer component

const VolDashboard = () => {
    return (
        <div>
            <VolNavbar />
            <h2>Welcome to Volunteer Dashboard</h2>
            {/* Add your dashboard content here */}
            <Footer />
        </div>
    );
};

export default VolDashboard;
