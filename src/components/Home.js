// Home.js

import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card'; // Update the import path based on your file structure
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Card
        title="Welcome to Our Investigation Services"
        description="we provide comprehensive investigative services with professionalism and discretion."
        imageUrl="/images/welcome.jpg" // Update with your image path
      />
      <Card
        title="Corporate Investigations"
        description="Protect your business with thorough investigations into fraud, embezzlement, and corporate espionage."
        imageUrl="/images/corporate.jpg" // Update with your image path
      />
      <Card
        title="Private Investigations"
        description="Ensure peace of mind with discreet investigations, including background checks and surveillance."
        imageUrl="/images/private.jpg" // Update with your image path
      />
      {/* Add more cards as needed */}
    </Container>
  );
};

export default Home;
