import React, { useEffect, useState } from "react";
import "../../style/sepet.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/slice";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basketProducts);
  const dispatch = useDispatch();

  const dell = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="sepet">
      <div className="basketProducts">
        {basket
          ? basket.map((item) => (
              <div className="basketProduct">
                <img src={item.productImage} />
                <p>{item.productName}</p>
                <p>{item.productPrice} TL</p>
                <button onClick={() => dell(item.id)}>x</button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Basket;
