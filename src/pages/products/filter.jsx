import React from "react";
import "../../style/products.css";

const Filter = ({ filtered }) => {
  return (
    <div className="filter">
      <button onClick={() => filtered("Hazır Sistem")}>Hazır sistemler</button>
      <button onClick={() => filtered("Laptop")}>Laptoplar</button>
      <button onClick={() => filtered("Ekipman")}>Ekipmanlar</button>
      <button onClick={() => filtered("Bileşen")}>Bileşenler</button>
      <button onClick={() => filtered("Yazılım")}>Yazılım</button>
      <button onClick={() => filtered("Hepsi")}>Tüm ürünler</button>
    </div>
  );
};

export default Filter;
