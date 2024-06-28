import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cases from './components/Cases';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import PhotoUpload from './components/PhotoUpload';
import styled from 'styled-components';
import PrivateRoute from './components/PrivateRoute'; // Define a PrivateRoute component to protect routes
import AdminDashboardPage from './pages/AdminDashboardPage';
import NavBar from './components/NavBar';
import AlertMessage from './components/AlertMessage';
import LoginPage from './components/Admin/LoginForm';
const AppContainer = styled.div`
  text-align: center;
`;
const teams = [
  { id: 1, name: 'Team Alpha', lead: 'Alice', members: ['John', 'Doe', 'Emma'] },
  { id: 2, name: 'Team Beta', lead: 'Bob', members: ['Charlie', 'Dave', 'Eve'] },
  { id: 3, name: 'Team Gamma', lead: 'Carol', members: ['Frank', 'Grace', 'Heidi'] },
  // Add more teams as needed
];
function App(){
  const [alert, setAlert] = useState({
    open: false,
    severity: '',
    message: '',
  });

  const showAlert = (severity, message) => {
    setAlert({
      open: true,
      severity,
      message,
    });
  };
  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };
  const [refresh, setRefresh] = React.useState(false);

  const handleUpload = () => {
    setRefresh(!refresh);
  };

  return (


    <Router>
          <NavBar/>
    <Routes>
      <Route path="/admin/login" element={<LoginPage showAlert={showAlert} />} />
      <Route path="/admin/dashboard" element={<PrivateRoute element={AdminDashboardPage} />} />
      <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/gallery" element={
            <>
              <PhotoUpload onUpload={handleUpload} />
              <Gallery key={refresh} />
            </>
          } />
          <Route path="/team" element={<Team teams={teams} />} />
          <Route path="/contact" element={<Contact />} />    
          </Routes>
          <AlertMessage
          open={alert.open}
          handleClose={handleCloseAlert}
          severity={alert.severity}
          message={alert.message}
        />
  </Router>
  );
}

export default App;
