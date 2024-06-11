import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [quantityRange, setQuantityRange] = useState({ min: 0, max: 100 });

  const handleFilter = () => {
    onFilter({
      price: priceRange,
      quantity: quantityRange
    });
  };

  return (
    <div className="filter">
      <h2>Filter</h2>
      <div>
        <label>Price Range:</label>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange.min}
          onChange={(e) =>
            setPriceRange({ ...priceRange, min: parseInt(e.target.value) })
          }
        />
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange.max}
          onChange={(e) =>
            setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
          }
        />
        <span>{priceRange.min} - {priceRange.max}</span>
      </div>
      <div>
        <label>Quantity Range:</label>
        <input
          type="range"
          min={0}
          max={100}
          value={quantityRange.min}
          onChange={(e) =>
            setQuantityRange({ ...quantityRange, min: parseInt(e.target.value) })
          }
        />
        <input
          type="range"
          min={0}
          max={100}
          value={quantityRange.max}
          onChange={(e) =>
            setQuantityRange({ ...quantityRange, max: parseInt(e.target.value) })
          }
        />
        <span>{quantityRange.min} - {quantityRange.max}</span>
      </div>
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default Filter;
