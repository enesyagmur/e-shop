import React from "react";
import "../../style/detail.css";


const DetailProduct = ({
  productName,
  productDetail,
  productPrice,
  productImage,
}) => {
  

  const addToBasket = (name, price, image) => {
    // setbasket([...basket, { name: name, price: price, image: image }]);
    
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
