// LandingNavbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import './LandingNavbar.css'; // Import the Navbar styles

const LandingNavbar = () => {
  return (
    <BootstrapNavbar className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Logo</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/volunteer">Volunteer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/organization">Organization</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </BootstrapNavbar>
  );
};

export default LandingNavbar;
