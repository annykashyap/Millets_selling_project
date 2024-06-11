import React from 'react';

const Acard = ({ price, name, quantity }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default Acard;
