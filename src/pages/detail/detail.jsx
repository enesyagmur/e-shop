import React, { useEffect, useState } from "react";
import db from "../../db/productsDb.json";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [productName, setproductName] = useState();
  const [productDetail, setproductdetail] = useState();
  const [productPrice, setproductPrice] = useState();
  const [productImage, setproductImage] = useState();

  const params = useParams();
  const name = params.productName;
  useEffect(() => {
    let newProduct = db.filter((item) => item.name === name);
    setproductName(newProduct[0].name);
    setproductdetail(newProduct[0].detail);
    setproductPrice(newProduct[0].price);
    setproductImage(newProduct[0].image);
  }, []);

  return (
    <div>
      <div>
        <img src={productImage} />
        <h5>{productName}</h5>
        <p>{productDetail}</p>
        <button>{productPrice}</button>
      </div>
    </div>
  );
};

export default Detail;
