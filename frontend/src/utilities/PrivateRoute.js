import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../utilities/AuthContext'; // Assuming AuthContext is in utilities

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet /> : <Navigate to="/dashboard-opportunities" />;
};

export default PrivateRoute;
