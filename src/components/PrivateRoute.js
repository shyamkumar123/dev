// /src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

const PrivateRoute = ({ element: Component, ...rest }) => {
  return AuthService.isLoggedIn() ? <Component {...rest} /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
