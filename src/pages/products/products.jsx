import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../db/productsDb.json";
import "../../style/products.css";
import SearchBar from "./searchBar";
import Filter from "./filter";
import ProductList from "./ProductList";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Products = () => {
  const [data, setData] = useState("");

  const params = useParams();
  let category = params.category;

  useEffect(() => {
    if (category !== "hepsi") {
      const newDb = db.filter((item) => item.category === category);
      setData(newDb);
    } else {
      setData(db);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryFilter = (categoryName) => {
    if (categoryName === "hepsi") {
      setData(db);
    } else {
      const newDb = db.filter((item) => item.category === categoryName);
      setData(newDb);
    }
  };

  const sort = (type) => {
    if (type === "artan") {
      const newDb = [...data];
      newDb.sort((a, b) => a.price - b.price);
      setData(newDb);
    } else if (type === "azalan") {
      const newDb = [...data];
      newDb.sort((a, b) => b.price - a.price);
      setData(newDb);
    }
  };

  const search = (value) => {
    if (value !== "") {
      const newDb = data.filter(
        (item) => item.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
      );
      setData(newDb);
    } else {
      setData(db);
    }
  };

  return (
    <div className="products">
      <Header />
      <SearchBar sort={sort} search={search} />

      <main>
        {category === "hepsi" ? <Filter filtered={categoryFilter} /> : null}
        <ProductList data={data} />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
