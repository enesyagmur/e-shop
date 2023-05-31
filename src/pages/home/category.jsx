import React from "react";
import "../../style/home.css";
import { useNavigate } from "react-router-dom";
import { CgBox } from "react-icons/cg";
import { BsLaptop } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { BsMouse2 } from "react-icons/bs";
import { GrWindows } from "react-icons/gr";
import { AiOutlineSmallDash } from "react-icons/ai";

const Category = () => {
  const naviGate = useNavigate();
  const goCategory = (categoryName) => {
    naviGate(`/products/${categoryName}`);
  };
  return (
    <div className="category">
      <div onClick={() => goCategory("hazırsistem")}>
        <CgBox />
      </div>
      <div onClick={() => goCategory("laptop")}>
        <BsLaptop />
      </div>
      <div onClick={() => goCategory("ekipman")}>
        <BsMouse2 />
      </div>
      <div onClick={() => goCategory("bileşen")}>
        <GiProcessor />
      </div>
      <div onClick={() => goCategory("yazılım")}>
        <GrWindows />
      </div>
      <div onClick={() => goCategory("hepsi")}>
        <AiOutlineSmallDash />
      </div>
    </div>
  );
};

export default Category;
