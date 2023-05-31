import React from "react";
import topSaleDb from "../../db/topSaleDb.json";
import "../../style/home.css";

const TopSale = () => {
  console.log(topSaleDb);
  return (
    <div className="topSale">
      <img src="https://w7.pngwing.com/pngs/60/414/png-transparent-iphone-14.png" />{" "}
      <div className="topSaleDetail">
        <h1>Ürün ismi</h1>
        <p>categori</p>
        <button>button</button>
      </div>
    </div>
  );
};

export default TopSale;
