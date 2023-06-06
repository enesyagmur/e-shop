import React from "react";
import "../../style/sepet.css";
import { useSelector, useDispatch } from "react-redux";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basketProducts);

  return (
    <div className="sepet">
      <div className="basketProducts">
        {basket
          ? basket.map((item) => (
              <div className="basketProduct">
                <img src={item.productImage} />
                <p>{item.productName}</p>
                <p>{item.productPrice} TL</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Basket;
