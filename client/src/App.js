import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/home/Home";
import Navbar from "./Components/global/Navbar";
import ItemDetails from "./Components/itemDetails/ItemDetails";
import CartMenu from "./Components/global/CartMenu";
import Checkout from "./Components/checkout/Checkout";
import Confirmation from "./Components/checkout/Confirmation";
import Footer from "./Components/global/Footer";
import About from "./Components/about/About";
import Stockists from "./Components/stockists/Stockists";
import Cancel from "./Components/checkout/Cancel";
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