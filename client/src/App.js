import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/global/Navbar";
import ItemDetails from "./components/itemDetails/ItemDetails";
import CartMenu from "./components/global/CartMenu";
import Checkout from "./components/checkout/Checkout";
import Confirmation from "./components/checkout/Confirmation";
import Footer from "./components/global/Footer";
import About from "./components/about/About";
import Stockists from "./components/stockists/Stockists";
import Cancel from "./components/checkout/Cancel";
import React from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="checkout/cancel" element={<Cancel />} />
          <Route path="about" element={<About />} />
          <Route path="stockists" element={<Stockists />} />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;