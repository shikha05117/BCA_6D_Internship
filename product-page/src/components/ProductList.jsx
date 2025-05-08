import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <h3 className="title">Organic Products</h3>
      <div className="products-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
            <img src={product.images} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="price">Rs. {product.price}/-</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
