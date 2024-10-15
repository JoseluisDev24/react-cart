import React from "react";
import classes from "./Product.module.css";

function Product({ food }) {
  return <div className={classes.container}>{food}</div>;
}

export default Product;
