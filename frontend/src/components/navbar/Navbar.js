// Navbar.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import LandingNavbar from './LandingNavbar';
import DashboardNavbar from './DashboardNavbar';

const Navbar = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.includes('/volunteer-dashboard');

  return isDashboardRoute ? <DashboardNavbar /> : <LandingNavbar />;
};

export default Navbar;
