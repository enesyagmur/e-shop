import React, { useEffect, useState } from "react";
import db from "../../db/productsDb.json";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/detail.css";
import { RiShoppingBasketFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import DetailProduct from "./DetailProduct";
import { useSelector, useDispatch } from "react-redux";
import { clearProducts } from "../../redux/slice";

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

  const goProducts = () => {
    naviGate(`/products/hepsi`);
  };

  const goBasket = () => {
    naviGate(`/basket`);
  };

  const goHome = () => {
    naviGate(`/`);
  };

  const clearBasket = () => {
    dispatch(clearProducts());
  };

  return (
    <div className="detail">
      <div className="detailHeader">
        <button onClick={goProducts}>
          <BiArrowBack />
        </button>
        <button onClick={goHome}>Home</button>

        <div className="basket">
          <p className="basketLenght">{basket.length}</p>
          <p className="basketClear" onClick={clearBasket}>
            x
          </p>

          <i onClick={goBasket}>
            <RiShoppingBasketFill />
          </i>
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
