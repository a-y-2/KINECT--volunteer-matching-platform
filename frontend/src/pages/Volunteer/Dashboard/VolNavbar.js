import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <p>logo.</p>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/get-opportunities">Explore</NavLink></li>
          <li><NavLink to="/get-profile">Profile</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
