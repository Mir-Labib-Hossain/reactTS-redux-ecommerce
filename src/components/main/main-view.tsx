import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../navbar";
import ProductDetails from "../productDetails";
import ProductListing from "../productListing";
const MainView: React.FC = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </>
  );
};
export default MainView;
