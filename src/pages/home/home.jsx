import "../../style/home.css";
import Header from "./header";
import Category from "./category";
import NewProducts from "./newProduct";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Category />
      <NewProducts />
      <Footer />
    </div>
  );
};

export default Home;
