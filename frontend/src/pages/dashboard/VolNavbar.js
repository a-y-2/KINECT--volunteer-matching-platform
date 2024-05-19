import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './VolNavbar.css'; 
import { useAuth } from '../../utilities/AuthContext';

const VolNavbar = () => {
  // const { logout } = useAuth();

  const handleLogout = () => {
    // logout();
    localStorage.removeItem('jwt');
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className='custom-navbar'>
        <Navbar.Brand>Hi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="side-menu">
        <Nav className="flex-column">
          {/* Use Link instead of Nav.Link for navigation */}
          <Link to="/dashboard-opportunities" className="nav-link">Opportunities</Link>
          <Link to="/volunteer-profile" className="nav-link">My Profile</Link>
          {/* <Link to="/impacts" className="nav-link">Impacts</Link> */}
          {/* <Link to="/enrolled" className="nav-link">Enrolled</Link> */}
        </Nav>
      </div>
    </>
  );
};

export default VolNavbar;
