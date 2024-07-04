import React from 'react';
import Card from './Card'; 

const DrinkList = ({ drinks }) => {
  return (
    <div>
      {drinks.map((drink) => (
        <Card key={drink.id} drink={drink} />
      ))}
    </div>
  );
};

export default DrinkList;
