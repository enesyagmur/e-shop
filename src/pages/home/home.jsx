import "../../style/home.css";
import Header from "./header";
import Category from "./category";
import NewProducts from "./newProduct";


const Home = () => {
  return (
    <div className="home">
      <Header />
      <Category />
      <NewProducts />
     
    </div>
  );
};

export default Home;
// hareketli bir header yapma aşamasındayım
