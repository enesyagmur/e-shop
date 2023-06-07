/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ data }) => {
  const naviGate = useNavigate();
  const goDetail = (name) => {
    naviGate(`/detail/${name}`);
  };

  return (
    <div className="productsList">
      {data
        ? data.map((item) => (
            <div key={Math.random()} className="product">
              <img src={item.image} onClick={() => goDetail(item.name)} />
              <h3 onClick={() => goDetail(item.name)}>{item.name}</h3>
              <p>{item.category}</p>
              <button>{item.price} TL</button>
            </div>
          ))
        : null}
    </div>
  );
};

export default ProductList;
