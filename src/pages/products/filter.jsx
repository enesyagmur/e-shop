import React from "react";
import "../../style/products.css";

const Filter = ({ filtered }) => {
  return (
    <div className="filter">
      <button onClick={() => filtered("hazırsistem")}>Hazır sistemler</button>
      <button onClick={() => filtered("laptop")}>Laptoplar</button>
      <button onClick={() => filtered("ekipman")}>Ekipmanlar</button>
      <button onClick={() => filtered("bileşen")}>Bileşenler</button>
      <button onClick={() => filtered("yazılım")}>Yazılım</button>
    </div>
  );
};

export default Filter;
