import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import Brands from "./sections/about/Brands";
import Certeficate from "./sections/gifts/certeficate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog/:type" element={<Catalog />} />
        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/certeficate" element={<Certeficate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
