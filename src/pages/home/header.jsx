import React from "react";

import "../../style/home.css";
import { useNavigate } from "react-router-dom";
import { CgBox } from "react-icons/cg";
import { BsLaptop } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { BsMouse2 } from "react-icons/bs";
import { GrWindows } from "react-icons/gr";
import { AiOutlineSmallDash } from "react-icons/ai";

const Header = () => {
  return (
    <div className="topSale">
      <div>
        <useNavigate />
      </div>
      <div>
        <CgBox />
      </div>
      <div className="laptop">
        <BsLaptop />
      </div>
      <div>
        <GiProcessor />
      </div>
      <div>
        <GrWindows />
      </div>
      <div>
        <BsMouse2 />
      </div>
    </div>
  );
};

export default Header;
