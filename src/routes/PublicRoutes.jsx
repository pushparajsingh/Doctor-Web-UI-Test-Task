import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  // Replace this with your actual authentication logic
  const isAuthenticated = false; // Example: localStorage.getItem('token');

  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

export default PublicRoutes;