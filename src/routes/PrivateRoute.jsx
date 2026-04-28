import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = true; 

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoutes;