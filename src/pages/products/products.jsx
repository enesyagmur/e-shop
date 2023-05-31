import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../db/productsDb.json";

const Products = () => {
  const [data, setData] = useState("");
  const params = useParams();
  const categoryName = params.category;

  useEffect(() => {
    const newDb = db.filter((item) => item.category === categoryName);
    setData(newDb);
  }, []);

  // const naviGate = useNavigate();
  // // const gitDetay = (productName) => {
  // //   naviGate(`/detail/${productName}`);
  // // };

  return <div>{data ? data.map((item) => <h1>{item.name}</h1>) : null}</div>;
};

export default Products;
