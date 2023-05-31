import React, { useEffect, useState } from "react";
import db from "../../db/productsDb.json";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/detail.css";
import { RiShoppingBasketFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";

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

  const naviGate = useNavigate();
  const goProducts = () => {
    naviGate(`/products/hepsi`);
  };

  return (
    <div className="detail">
      <div className="detailHeader">
        <button onClick={goProducts}>
          <BiArrowBack />
        </button>
        <div className="basket">
          <RiShoppingBasketFill />
        </div>
      </div>
      <div className="detailProduct">
        <img src={productImage} />
        <h5>{productName}</h5>
        <p>{productDetail}</p>
        <button>{productPrice} TL</button>
      </div>
    </div>
  );
};

export default Detail;
