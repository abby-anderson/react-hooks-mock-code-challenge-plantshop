import React, { useState } from "react";

function PlantCard({plant, handleDeletePlant}) {
  const [inStock, setInStock] = useState(true)

  function toggleStock () {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      { inStock === true ? (
        <button onClick={toggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
      <button onClick={() => handleDeletePlant(plant)} className="secondary">Delete</button>
    </li>
  );
}

export default PlantCard;
