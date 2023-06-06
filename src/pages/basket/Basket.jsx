import React from "react";
import "../../style/sepet.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/slice";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basketProducts);
  const dispatch = useDispatch();

  const dell = (name) => {
    dispatch(deleteProduct(name));
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
                <button onClick={() => dell(item.productName)}>x</button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Basket;
