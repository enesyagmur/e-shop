import React from "react";

const SearchBar = ({ setInput }) => {
  const sendInput = (value) => {
    setInput(value);
  };
  return (
    <div className="searchBar">
      <input type="text" onChange={(e) => sendInput(e.target.value)} />
    </div>
  );
};

export default SearchBar;
