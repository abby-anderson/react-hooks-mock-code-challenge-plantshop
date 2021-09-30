import React, { useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsToDisplay, handleDeletePlant}) {

  function renderPlantCards () {
    return (
      plantsToDisplay.map(plant => < PlantCard plant={plant} key={plant.id} handleDeletePlant={handleDeletePlant} /> )
      )}
  
  return (
    <ul className="cards">{renderPlantCards()}</ul>
  );
}

export default PlantList;
