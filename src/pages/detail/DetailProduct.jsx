import React from "react";
import "../../style/detail.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slice";

const DetailProduct = ({
  productName,
  productDetail,
  productPrice,
  productImage,
}) => {
  const basket = useSelector((state) => state.basket.basketProducts);
  console.log(basket);
  const dispatch = useDispatch();
  const addToBasket = (name, price, image) => {
    dispatch(
      addProduct({
        productName: name,
        productPrice: price,
        productImage: image,
      })
    );
  };

  return (
    <div className="detailProduct">
      <img src={productImage} />
      <h5>{productName}</h5>
      <p>{productDetail}</p>
      <h5>{productPrice} TL</h5>

      <button
        onClick={() => addToBasket(productName, productPrice, productImage)}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default DetailProduct;
