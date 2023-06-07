import React from "react";

import "../../src/style/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };

  return (
    <div className="topSale">
      <h1 onClick={goHome}>PCSHOP</h1>
    </div>
  );
};

export default Header;
