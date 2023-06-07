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
          <img src={db[2].image} />
          <h5 onClick={() => goDetail(db[2].name)}>{db[2].name}</h5>
          <button>{db[2].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[5].image} onClick={() => goDetail(db[5].name)} />
          <h5 onClick={() => goDetail(db[5].name)}>{db[5].name}</h5>
          <button>{db[5].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[8].image} onClick={() => goDetail(db[8].name)} />
          <h5 onClick={() => goDetail(db[8].name)}>{db[8].name}</h5>
          <button>{db[8].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[11].image} onClick={() => goDetail(db[11].name)} />
          <h5 onClick={() => goDetail(db[11].name)}>{db[11].name}</h5>
          <button>{db[11].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[3].image} />
          <h5 onClick={() => goDetail(db[3].name)}>{db[3].name}</h5>
          <button>{db[3].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[6].image} onClick={() => goDetail(db[6].name)} />
          <h5 onClick={() => goDetail(db[6].name)}>{db[6].name}</h5>
          <button>{db[6].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[9].image} onClick={() => goDetail(db[9].name)} />
          <h5 onClick={() => goDetail(db[9].name)}>{db[9].name}</h5>
          <button>{db[9].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[12].image} onClick={() => goDetail(db[12].name)} />
          <h5 onClick={() => goDetail(db[12].name)}>{db[12].name}</h5>
          <button>{db[12].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[4].image} onClick={() => goDetail(db[4].name)} />
          <h5 onClick={() => goDetail(db[4].name)}>{db[4].name}</h5>
          <button>{db[4].price} TL</button>
        </div>
        <div key={Math.random()}>
          <img src={db[7].image} />
          <h5 onClick={() => goDetail(db[7].name)}>{db[7].name}</h5>
          <button>{db[7].price} TL</button>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
