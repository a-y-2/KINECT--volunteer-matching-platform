import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    const jwt = localStorage.getItem('jwt');
    return jwt !== null;
  };

  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : <Navigate to="/volunteer" replace />}
    />
  );
};

export default ProtectedRoute;
