import React, { useEffect, useState } from "react";
import db from "../../db/productsDb.json";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/detail.css";
import { RiShoppingBasketFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import DetailProduct from "./DetailProduct";
import { useSelector } from "react-redux";

const Detail = () => {
  const [productName, setproductName] = useState();
  const [productDetail, setproductdetail] = useState();
  const [productPrice, setproductPrice] = useState();
  const [productImage, setproductImage] = useState();

  const basket = useSelector((state) => state.basket.basketProducts);

  const params = useParams();
  const name = params.productName;
  useEffect(() => {
    let newProduct = db.filter((item) => item.name === name);
    setproductName(newProduct[0].name);
    setproductdetail(newProduct[0].detail);
    setproductPrice(newProduct[0].price);
    setproductImage(newProduct[0].image);
  }, []);

  const naviGate = useNavigate();

  const goProducts = () => {
    naviGate(`/products/hepsi`);
  };

  const goBasket = () => {
    naviGate(`/basket`);
  };

  return (
    <div className="detail">
      <div className="detailHeader">
        <button onClick={goProducts}>
          <BiArrowBack />
        </button>
        <div className="basket" onClick={goBasket}>
          <p>{basket.length}</p>
          <RiShoppingBasketFill />
        </div>
      </div>

      <DetailProduct
        productName={productName}
        productDetail={productDetail}
        productPrice={productPrice}
        productImage={productImage}
      />
    </div>
  );
};

export default Detail;
