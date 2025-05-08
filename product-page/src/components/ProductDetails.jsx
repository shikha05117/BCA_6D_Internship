import React from "react";
import { useParams } from "react-router-dom";
import "../styles/productDetails.css";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-container">
      <img src={product.images} alt={product.name} />
      <h1>{product.name}</h1>
      <p className="price">Rs. {product.price}/-</p>
      <p>{product.description}</p>
      <div className="buttons">
        <button className="buy">Buy Now</button>
        <button className="cart">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
