import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => setPlants(data))
  }, [])
  
  if (!!plants) {
    console.log(plants);
  }

  function handlePlantAdd (newPlant) {
    console.log('heres the new plant inside plant page', newPlant)
    setPlants([...plants, newPlant])
  }

  function searchPlants (event) {
    //console.log('search plants event in plant page', event.target.value)
    setSearchText(event.target.value.toLowerCase());
    //console.log('search text', searchText)
    //console.log("typeof searchtext", typeof searchText)
  }

  function handleDeletePlant (plant) {
    console.log(plant)

    //delete plant in fetch
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then( () => {
      //remove plant from plants state
      const availablePlants = plants.filter(each => each.id !== plant.id)
      setPlants(availablePlants)
    })
  }

  const plantsToDisplay = plants.filter(plant=> {
    //console.log("typeof plant.name",typeof plant.name);
    //console.log("typeof plant", plant)
    const lowerCasePlantName = plant.name.toLowerCase();
    if (lowerCasePlantName.includes(searchText)) {
      return true;
    }
  })

  //console.log('plants to display', plantsToDisplay)

  return (
    <main>
      <NewPlantForm onPlantAdd={handlePlantAdd} />
      <Search searchPlants={searchPlants} />
      {/* <PlantList plants={plants} /> */}
      <PlantList plantsToDisplay={plantsToDisplay} handleDeletePlant={handleDeletePlant} />
    </main>
  );
}

export default PlantPage;
