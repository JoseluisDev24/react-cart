import React from "react";
import classes from "../components/ParentProduct.module.css";
import Product from "../components/Product"

const products = [
  {
    id: 0,
    name: "🍔",
    price: 100,
    quantity: 1,
  },
  {
    id: 1,
    name: "🍟",
    price: 50,
    quantity: 2,
  },
  {
    id: 2,
    name: "🍦",
    price: 500,
    quantity: 3,
  },
  {
    id: 3,
    name: "🥤",
    price: 80,
    quantity: 2,
  },
  {
    id: 4,
    name: "🥗",
    price: 20,
    quantity: 2,
  },
  {
    id: 5,
    name: "🍜",
    price: 100,
    quantity: 1,
  },
];

function ParentProduct({ children }) {
  return (
    <div className={classes.productContainer}>
      <h1>Add to your order:</h1>

      {products.map((product) => (
        <Product key={product.id} food={product.name} />
      ))}
    </div>
  );
}

export default ParentProduct;
