import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useAuth } from '../../utilities/AuthContext';

const NpoNavbar = () => {


const { handleLogout } = useAuth();
  return (
    <>
      <Navbar bg="light" expand="lg" className='custom-navbar'>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="side-menu">
        <Nav className="flex-column">
          <Link to="/npo-opportunities" className="nav-link">Opportunities</Link>
          <Link to="/npo-profile" className="nav-link">Profile</Link>
        </Nav>
      </div>
    </>
  );
};

export default NpoNavbar;
