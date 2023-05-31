import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../db/productsDb.json";
import "../../style/products.css";
import SearchBar from "./searchBar";
import Filter from "./filter";

const Products = () => {
  const [data, setData] = useState("");
  const [input, setInput] = useState("");
  const [sorting, setSorting] = useState("");
  const params = useParams();
  let category = params.category;

  useEffect(() => {
    setData(db);
  }, [sorting]);

  useEffect(() => {
    if (category !== "hepsi") {
      const newDb = db.filter((item) => item.category === category);
      setData(newDb);
    } else {
      setData(db);
    }
  }, []);

  const categoryFilter = (categoryName) => {
    const newDb = db.filter((item) => item.category === categoryName);
    setData(newDb);
  };

  const sort = (type) => {
    if (type === "artan") {
      db.sort((a, b) => a.price - b.price);
      setSorting("fiyat artan şeklinde sıralandı");
    } else if (type === "azalan") {
      db.sort((a, b) => b.price - a.price);
      setSorting("fiyat azalan şeklinde sıralandı");
    }
  };

  return (
    <div className="products">
      <SearchBar sort={sort} />
      <main>
        {" "}
        {category === "hepsi" ? <Filter filtered={categoryFilter} /> : null}
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
