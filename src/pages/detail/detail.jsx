import React, { useEffect, useState } from "react";
import db from "../../db/productsDb.json";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/detail.css";
import { RiShoppingBasketFill } from "react-icons/ri";

import DetailProduct from "./DetailProduct";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Detail = () => {
  const [productName, setproductName] = useState();
  const [productDetail, setproductdetail] = useState();
  const [productPrice, setproductPrice] = useState();
  const [productImage, setproductImage] = useState();

  const basket = useSelector((state) => state.basket.basketProducts);
  const dispatch = useDispatch();

  const params = useParams();
  const name = params.productName;
  useEffect(() => {
    let newProduct = db.filter((item) => item.name === name);
    setproductName(newProduct[0].name);
    setproductdetail(newProduct[0].detail);
    setproductPrice(newProduct[0].price);
    setproductImage(newProduct[0].image);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const naviGate = useNavigate();

  const goBasket = () => {
    naviGate(`/basket`);
  };

  return (
    <div className="detail">
      <Header />

      <div className="basket">
        <p className="basketLenght">{basket.length}</p>

        <i onClick={goBasket}>
          <RiShoppingBasketFill />
        </i>
      </div>
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
