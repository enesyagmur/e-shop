import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../db/productsDb.json";
import "../../style/products.css";
import SearchBar from "./searchBar";
import Filter from "./filter";

const Products = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [selectCategory, setselectCategory] = useState("hepsi");
  const params = useParams();
  let category = params.category;

  useEffect(() => {
    if (category !== "hepsi") {
      const newDb = db.filter((item) => item.category === category);
      setData(newDb);
    } else {
      setData(db);
    }
  }, []);

  const filter = (categoryName) => {
    const newDb = db.filter((item) => item.category === categoryName);
    setData(newDb);
  };

  return (
    <div className="products">
      <SearchBar />
      <main>
        {" "}
        {category === "hepsi" ? <Filter filtered={filter} /> : null}
        <div className="productsList">
          {data
            ? data.map((item) => (
                <div className="product">
                  <h1>{item.name}</h1>
                  <p>{item.category}</p>
                  <p>{item.detail}</p>
                  <button>{item.price} TL</button>
                </div>
              ))
            : null}
        </div>
      </main>
    </div>
  );
};

export default Products;
