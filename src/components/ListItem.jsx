import React from "react";
import Product from "./Product";
import classes from "./ListItems.module.css";



function ListItem({ product, amount, price }) {
  return (
    <div className={classes.items}>
      <div className={classes.productAmount}>
        <div>{product}</div>
        <div>{amount}</div>
      </div>
      <div className={classes.price}>{price}</div>
    </div>
  );
}

export default ListItem;
