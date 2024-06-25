// /src/components/PrivateRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PrivateRoute = () => {
  return AuthService.isLoggedIn() ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
