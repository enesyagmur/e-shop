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
      <div onClick={() => goCategory("hazırsistem")}>Hazır sistemler</div>
      <div onClick={() => goCategory("laptop")}>Laptoplar</div>
      <div onClick={() => goCategory("ekipman")}>Ekipmanlar</div>
      <div onClick={() => goCategory("bileşen")}>Bileşenler</div>
      <div onClick={() => goCategory("yazılım")}>Yazılım</div>
      <div onClick={() => goCategory("hepsi")}>Tüm ürünler</div>
    </div>
  );
};

export default Category;
