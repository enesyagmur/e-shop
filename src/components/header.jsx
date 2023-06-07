import React from "react";

import "../../src/style/header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";

const Header = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };

  const goBasket = () => {
    navigate(`/basket`);
  };
  const basket = useSelector((state) => state.basket.basketProducts);

  const goProducts = () => {
    navigate(`/products/hepsi`);
  };
  return (
    <div className="header">
      <h1 onClick={goHome}>PCSHOP</h1>
      <div className="headerIcons">
        <i onClick={goProducts}>
          <BsSearch />
        </i>
        <i>
          <BsTelephone />
          <a href="#"></a>
        </i>
        <div className="basket">
          <p className="basketLenght">{basket.length}</p>
          <i onClick={goBasket}>
            {basket.length !== 0 ? <SlBasketLoaded /> : <SlBasket />}
          </i>
        </div>
      </div>
    </div>
  );
};

export default Header;
