import React from "react";
import "../../style/home.css";
import { useNavigate } from "react-router-dom";

import { BsFillLaptopFill } from "react-icons/bs";
import { BsGpuCard } from "react-icons/bs";
import { BsFillMouse2Fill } from "react-icons/bs";
import { GrWindows } from "react-icons/gr";
import { RiComputerFill } from "react-icons/ri";

const Category = () => {
  const naviGate = useNavigate();
  const goCategory = (categoryName) => {
    naviGate(`/products/${categoryName}`);
  };
  return (
    <div className="category">
      <div onClick={() => goCategory("Hazır Sistem")}>
        <RiComputerFill />
      </div>
      <div onClick={() => goCategory("Laptop")}>
        <BsFillLaptopFill />
      </div>
      <div onClick={() => goCategory("Ekipman")}>
        <BsFillMouse2Fill />
      </div>
      <div onClick={() => goCategory("Bileşen")}>
        <BsGpuCard />
      </div>
      <div onClick={() => goCategory("Yazılım")}>
        <GrWindows />
      </div>
      <div onClick={() => goCategory("hepsi")}>
        <p>All</p>
      </div>
    </div>
  );
};

export default Category;
