// DashboardNavbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './VolNavbar.css'; // Import custom styles

const VolNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Navbar with hamburger icon */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={toggleMenu}>
          <div className={`menu-icon ${showMenu ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Brand>
      </Navbar>

      {/* Side menu panel */}
      {showMenu && (
        <div className="side-menu" ref={menuRef}>
          <Nav className="flex-column">
            <Nav.Link href="#profile">My Profile</Nav.Link>
            <Nav.Link href="#impacts">Impacts</Nav.Link>
            <Nav.Link href="#enrolled">Enrolled</Nav.Link>
          </Nav>
        </div>
      )}
    </>
  );
};

export default VolNavbar;
