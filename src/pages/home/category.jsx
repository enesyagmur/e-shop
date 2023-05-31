import React from "react";
import "../../style/home.css";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const naviGate = useNavigate();
  const goCategory = (categoryName) => {
    naviGate(`/products/${categoryName}`);
  };
  return (
    <div className="category">
      <div onClick={() => goCategory("hazırsistemler")}>Hazır sistemler</div>
      <div onClick={() => goCategory("laptoplar")}>Laptoplar</div>
      <div onClick={() => goCategory("ekipmanlar")}>Ekipmanlar</div>
      <div onClick={() => goCategory("bileşenler")}>Bileşenler</div>
      <div onClick={() => goCategory("yazılım")}>Yazılım</div>
    </div>
  );
};

export default Category;
