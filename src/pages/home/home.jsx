import React from "react";
import { useNavigate } from "react-router-dom";
import db from "../../db/productsDb.json";

const Home = () => {
  const naviGate = useNavigate();
  const gitUrunler = (categoryName) => {
    naviGate(`products/${categoryName}`);
  };
  console.log(db);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => gitUrunler("elektronik")}>ürünler sayfası</button>
    </div>
  );
};

export default Home;
