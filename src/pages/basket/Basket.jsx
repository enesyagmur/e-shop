/* eslint-disable jsx-a11y/alt-text */

import "../../style/sepet.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, clearProducts } from "../../redux/slice";
import Header from "../../components/header";
import Footer from "../../components/footer";

const Basket = () => {
  const basket = useSelector((state) => state.basket.basketProducts);
  const dispatch = useDispatch();

  const dell = (id) => {
    dispatch(deleteProduct(id));
  };

  const clear = () => {
    dispatch(clearProducts());
  };

  return (
    <div className="sepet">
      <Header />
      <div className="basketProducts">
        {basket
          ? basket.map((item) => (
              <div key={item.id} className="basketProduct">
                <img src={item.productImage} />
                <p>{item.productName}</p>
                <p>{item.productPrice} TL</p>
                <button onClick={() => dell(item.id)}>x</button>
              </div>
            ))
          : null}
        <div className="basketFooter">
          <button onClick={clear}>Temizle</button> <p>{basket.length}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
