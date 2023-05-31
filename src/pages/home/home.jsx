
import "../../style/home.css";
import TopSale from "./topSale";
import Category from "./category";

const Home = () => {
  return (
    <div className="home">
      <TopSale />
      <Category />
    </div>
  );
};

export default Home;
