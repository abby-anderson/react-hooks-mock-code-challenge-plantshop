import React from "react";

function Search({searchPlants}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => searchPlants(e)}
      />
    </div>
  );
}

export default Search;
