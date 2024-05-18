import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// const PublicOnlyRoute = ({ path, element }) => {
//     const { isAuthenticated } = useAuth();
  
//     return (
//       <Route
//         path={path}
//         element={isAuthenticated ? <Navigate to="/volunteer-dashboard" /> : element}
//       />
//     );

    
// };
  


const PublicOnlyRoute = () => {
    const { isAuthenticated } = useAuth();

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isAuthenticated ? <Navigate to="/volunteer-dashboard" /> : <Navigate to="/" />;
}



export default PublicOnlyRoute;