import React from "react";
import classes from "../components/OrderList.module.css";
import ListItem from "./ListItem";
import Total from "./Total";


function OrderList() {
  return (
    <>
      <div className={classes.orderBox}>
        <div className={classes.titleList}>
          <h2>Order List</h2>
          <span>🗑</span>
        </div>
        <div className={classes.spaceItemsPrice}>
          <div className={classes.items}>
            <ListItem product="🍔" amount="x2" price="$200" />
            <ListItem product="🍟" amount="x1" price="$50" />
          </div>
          <div>
            <hr />
            <Total />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
