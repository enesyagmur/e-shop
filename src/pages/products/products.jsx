import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const categoryName = useParams();
  console.log(categoryName.category);
  // const naviGate = useNavigate();
  // // const gitDetay = (productName) => {
  // //   naviGate(`/detail/${productName}`);
  // // };

  return (
    <div>
      <h1>{categoryName.category}</h1>
    </div>
  );
};

export default Products;
