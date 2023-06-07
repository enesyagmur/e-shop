/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import db from "../../db/productsDb.json";
import { useNavigate } from "react-router-dom";

const NewProducts = () => {
  const naviGate = useNavigate();
  const goDetail = (name) => {
    naviGate(`/detail/${name}`);
  };
  return (
    <div className="newProducts">
      <div className="bestSale">
        <div key={Math.random()}>
          <img src={db[2].image} onClick={() => goDetail(db[2].name)} />
          <h5 onClick={() => goDetail(db[2].name)}>{db[2].name}</h5>
          <button>{db[2].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[6].image} onClick={() => goDetail(db[6].name)} />
          <h5 onClick={() => goDetail(db[6].name)}>{db[6].name}</h5>
          <button>{db[6].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[10].image} onClick={() => goDetail(db[10].name)} />
          <h5 onClick={() => goDetail(db[10].name)}>{db[10].name}</h5>
          <button>{db[10].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[14].image} onClick={() => goDetail(db[14].name)} />
          <h5 onClick={() => goDetail(db[14].name)}>{db[11].name}</h5>
          <button>{db[14].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[16].image} onClick={() => goDetail(db[16].name)} />
          <h5 onClick={() => goDetail(db[16].name)}>{db[16].name}</h5>
          <button>{db[16].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[20].image} onClick={() => goDetail(db[20].name)} />
          <h5 onClick={() => goDetail(db[20].name)}>{db[20].name}</h5>
          <button>{db[20].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[24].image} onClick={() => goDetail(db[24].name)} />
          <h5 onClick={() => goDetail(db[24].name)}>{db[24].name}</h5>
          <button>{db[24].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[28].image} onClick={() => goDetail(db[28].name)} />
          <h5 onClick={() => goDetail(db[28].name)}>{db[12].name}</h5>
          <button>{db[28].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[32].image} onClick={() => goDetail(db[32].name)} />
          <h5 onClick={() => goDetail(db[32].name)}>{db[32].name}</h5>
          <button>{db[32].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[35].image} onClick={() => goDetail(db[35].name)} />
          <h5 onClick={() => goDetail(db[35].name)}>{db[35].name}</h5>
          <button>{db[35].price} TL</button>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
