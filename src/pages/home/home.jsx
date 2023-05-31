import "../../style/home.css";
import TopSale from "./topSale";
import Category from "./category";
import NewProducts from "./newProduct";

const Home = () => {
  return (
    <div className="home">
      <TopSale />
      <Category />
      <NewProducts />
    </div>
  );
};

export default Home;
// hareketli bir header yapma aşamasındayım
