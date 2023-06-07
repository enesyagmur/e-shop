/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../../style/detail.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slice";

const DetailProduct = ({
  productName,
  productDetail,
  productPrice,
  productImage,
}) => {
  const dispatch = useDispatch();
  const addToBasket = (name, price, image) => {
    dispatch(
      addProduct({
        productName: name,
        productPrice: price,
        productImage: image,
        id: Math.random(),
      })
    );
  };

  return (
    <div className="detailProduct">
      <div>
        <img src={productImage} />{" "}
      </div>
      <div>
        <h5>{productName}</h5>
        <p>{productDetail}</p>
        <h5>{productPrice} TL</h5>

        <button
          onClick={() => addToBasket(productName, productPrice, productImage)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
