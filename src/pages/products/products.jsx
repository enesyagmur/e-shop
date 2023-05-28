import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const naviGate = useNavigate();

  const gitDetay = (productName) => {
    naviGate(`/detail/${productName}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => gitDetay("iphone14")}>Ürün detayına git</button>
    </div>
  );
};

export default Products;
