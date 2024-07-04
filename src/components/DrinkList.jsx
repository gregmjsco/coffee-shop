import React from 'react';
import Card from './Card'; 
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const DrinkList = ({ drinks }) => {
  return (
    <Wrapper>
      {drinks.map((drink) => (
        <Card key={drink.id} drink={drink} />
      ))}
    </Wrapper>
  );
};

export default DrinkList;
