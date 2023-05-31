import React from "react";
import db from "../../db/productsDb.json";

const NewProducts = () => {
  return (
    <div className="newProducts">
      <h1>Çok satılanlar</h1>
      <div className="bestSale">
        <div>
          <img src={db[1].image} />
          <h5>{db[1].name}</h5>
          <button>{db[1].price} TL</button>
        </div>
        <div>
          <img src={db[5].image} />
          <h5>{db[5].name}</h5>
          <button>{db[5].price} TL</button>
        </div>
        <div>
          <img src={db[8].image} />
          <h5>{db[8].name}</h5>
          <button>{db[8].price} TL</button>
        </div>
        <div>
          <img src={db[11].image} />
          <h5>{db[11].name}</h5>
          <button>{db[11].price} TL</button>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
