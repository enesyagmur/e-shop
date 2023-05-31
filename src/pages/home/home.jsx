import React from "react";
// import { useNavigate } from "react-router-dom";
// import db from "../../db/productsDb.json";
import "../../style/home.css";
import TopSale from "./topSale";
import Category from "./category";

const Home = () => {
  return (
    <div className="home">
      <TopSale />
      <Category />
    </div>
  );
};

export default Home;

// tıklanan butona göre kategorilere ayırma işlemindeyim
// sonrasında searchbar işlemine geçicem
