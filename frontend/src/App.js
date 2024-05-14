import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Volunteer from './pages/landing/Volunteer/Volunteer';
import VolDashboard from './pages/dashboard/VolDashboard';
import VolMyProfile from './pages/dashboard/VolMyProfile';

import LandingNavbar from './components/navbar/LandingNavbar'; // Import LandingNavbar
import VolNavbar from './pages/dashboard/VolNavbar'; // Import DashboardNavbar
import Footer from './components/footer/Footer';

const Organization = () => <h2>Organization Page</h2>;
const About = () => <h2>About Us Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingNavbar />
                <Volunteer />
                <Footer />
              </>
            }
          />
          <Route
            path="/volunteer"
            element={
              <>
                <LandingNavbar />
                <Volunteer />
                <Footer />
              </>
            }
          />
          <Route
            path="/volunteer-dashboard"
            element={
              <>
                <VolNavbar />
                <VolDashboard />
                {/* You can choose to include or exclude Footer component for dashboard */}
              </>
            }
          /> 
           {/* RIGHT NOW, ORG AND DASHBOARD HAVE SAME CONTENT, MAYBE LATER DASHBOARD CAN HAVE REC AND OPPORTUNITIES CAN HAVE EXPLORATION */}
          <Route
            path="/dashboard-opportunities"
            element={
              <>
                <VolNavbar />
                <VolDashboard />
                {/* You can choose to include or exclude Footer component for dashboard */}
              </>
            }
          />     
           <Route
            path="/volunteer-profile"
            element={
              <>
                <VolNavbar />
                <VolMyProfile />
                {/* You can choose to include or exclude Footer component for dashboard */}
              </>
            }
          />      
          <Route path="/organization" element={<Organization />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
