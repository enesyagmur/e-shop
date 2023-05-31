import React from "react";

const SearchBar = ({ setInput, sort }) => {
  const sendInput = (value) => {
    setInput(value);
  };
  return (
    <div className="searchBar">
      <button onClick={() => sort("artan")}>Artan</button>
      <input type="text" onChange={(e) => sendInput(e.target.value)} />
      <button onClick={() => sort("azalan")}>Azalan</button>
    </div>
  );
};

export default SearchBar;
