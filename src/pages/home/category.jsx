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
      <div onClick={() => goCategory("Hazır Sistem")}>
        <CgBox />
      </div>
      <div onClick={() => goCategory("Laptop")}>
        <BsLaptop />
      </div>
      <div onClick={() => goCategory("Ekipman")}>
        <BsMouse2 />
      </div>
      <div onClick={() => goCategory("Bileşen")}>
        <GiProcessor />
      </div>
      <div onClick={() => goCategory("Yazılım")}>
        <GrWindows />
      </div>
      <div onClick={() => goCategory("hepsi")}>
        <AiOutlineSmallDash />
      </div>
    </div>
  );
};

export default Category;
