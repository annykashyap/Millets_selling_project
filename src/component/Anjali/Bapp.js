import React, { useState } from 'react';
import Card from './Acard';
import Filter from './Filter'; // Assuming Filter component is in a separate file
import Acard from './Acard';

const Bapp = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', price: 10, quantity: 5 },
    { name: 'Product 2', price: 20, quantity: 10 },
    { name: 'Product 3', price: 15, quantity: 7 }
  ]);

  const handleFilter = ({ price, quantity }) => {
    const filteredProducts = products.filter(
      (product) =>
        (!price.min || product.price >= price.min) &&
        (!price.max || product.price <= price.max) &&
        (!quantity.min || product.quantity >= quantity.min) &&
        (!quantity.max || product.quantity <= quantity.max)
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="app">
      <Filter onFilter={handleFilter} />
      {products.map((product, index) => (
        <Acard
          key={index}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
};

export default Bapp;
