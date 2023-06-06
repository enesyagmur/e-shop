import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ search, sort }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };

  return (
    <div className="searchBar">
      <button onClick={goHome}>Home</button>
      <button onClick={() => sort("artan")}>Artan</button>
      <input type="text" onChange={(e) => search(e.target.value)} />
      <button onClick={() => sort("azalan")}>Azalan</button>
    </div>
  );
};

export default SearchBar;
