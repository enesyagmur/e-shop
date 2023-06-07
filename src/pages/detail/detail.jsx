import React, { useEffect, useState } from "react";
import db from "../../db/productsDb.json";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/detail.css";
import { RiShoppingBasketFill } from "react-icons/ri";

import DetailProduct from "./DetailProduct";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Detail = () => {
  const [productName, setproductName] = useState();
  const [productDetail, setproductdetail] = useState();
  const [productPrice, setproductPrice] = useState();
  const [productImage, setproductImage] = useState();

  const params = useParams();
  const name = params.productName;
  useEffect(() => {
    let newProduct = db.filter(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    setproductName(newProduct[0].name);
    setproductdetail(newProduct[0].detail);
    setproductPrice(newProduct[0].price);
    setproductImage(newProduct[0].image);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="detail">
      <Header />

      <DetailProduct
        productName={productName}
        productDetail={productDetail}
        productPrice={productPrice}
        productImage={productImage}
      />
      <Footer />
    </div>
  );
};

export default Detail;
