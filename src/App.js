import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cases from './components/Cases';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import PhotoUpload from './components/PhotoUpload';
import styled from 'styled-components';
import Card from './components/Card';


const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  const [refresh, setRefresh] = React.useState(false);

  const handleUpload = () => {
    setRefresh(!refresh);
  };

  return (
    <Router>
      <AppContainer>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/gallery" element={
            <>
              <PhotoUpload onUpload={handleUpload} />
              <Gallery key={refresh} />
            </>
          } />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
