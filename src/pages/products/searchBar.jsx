import React from "react";

const SearchBar = ({ search, sort }) => {
  return (
    <div className="searchBar">
      <button onClick={() => sort("artan")}>Artan</button>
      <input type="text" onChange={(e) => search(e.target.value)} />
      <button onClick={() => sort("azalan")}>Azalan</button>
    </div>
  );
};

export default SearchBar;
