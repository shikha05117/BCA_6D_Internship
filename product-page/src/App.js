import React from "react";
import "./styles/index.css";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import img1 from "./assets/images/1.png";
import img2 from "./assets/images/2.png";
import img3 from "./assets/images/3.png";
import img4 from "./assets/images/4.png";
import img5 from "./assets/images/5.png";
import img6 from "./assets/images/6.png";

const productData = [
  {
    id: "p-1",
    name: "Strawberries",
    price: "200",
    images: img1,
    description: "Organic Strawberries - Fresh and juicy.",
  },
  {
    id: "p-2",
    name: "Onions",
    price: "50",
    images: img2,
    description: "Fresh organic onions.",
  },
  {
    id: "p-3",
    name: "Tomatoes",
    price: "80",
    images: img3,
    description: "Ripe organic tomatoes.",
  },
  {
    id: "p-4",
    name: "Eggplant",
    price: "70",
    images: img4,
    description: "Fresh organic eggplant.",
  },
  {
    id: "p-5",
    name: "Broccoli",
    price: "100",
    images: img5,
    description: "Fresh organic broccoli.",
  },
  {
    id: "p-6",
    name: "Potatoes",
    price: "40",
    images: img6,
    description: "Organic potatoes.",
  },
];


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList products={productData} />} />
        <Route path="/product/:id" element={<ProductDetails products={productData} />} />
      </Routes>
    </Router>
  );
}

export default App;
