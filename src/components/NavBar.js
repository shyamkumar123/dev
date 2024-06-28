// /src/components/NavBar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import AuthService from '../services/AuthService';

const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = AuthService.isLoggedIn();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/admin/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Button align="left" color="inherit" component={Link} to={isLoggedIn ? "/home" : "/admin/login"}>
            {isLoggedIn ? "" : "Login"}
          </Button>
          <Box display="flex">
          <Button color="inherit" component={Link} to="/">Home</Button>
         
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            {isLoggedIn && (
              <>
                 <Button color="inherit" component={Link} to="/team">Team</Button>
                 <Button color="inherit" component={Link} to="/cases">Cases</Button>
                <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
