import "../../style/home.css";
import Category from "./category";
import NewProducts from "./newProduct";
import Header from "../../components/header";
import Footer from "../../components/footer";

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
