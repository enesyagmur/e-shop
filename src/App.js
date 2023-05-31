import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Detail from "./pages/detail/detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/detail/:productName" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
