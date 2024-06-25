// Card.js

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  margin: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 1em;
`;

const Card = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      {imageUrl && <CardImage src={imageUrl} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
