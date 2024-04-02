import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/product-detail/:product_id"
          element={<ProductDetail />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
