// Import necessary dependencies
import React from 'react';
import styled from 'styled-components';

// Define styled components for the card
const CardContainer = styled.div`
  width: 300px;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const DrinkName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Define the Card component
const Card = ({ drink }) => {
  return (
    <CardContainer>
      <DrinkName>{drink.name}</DrinkName>
      <Description>{drink.description}</Description>
      <p>Price: ${drink.price.toFixed(2)}</p>
    </CardContainer>
  );
};

// Export the Card component
export default Card;
