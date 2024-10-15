import { useState } from "react";
import Product from "./components/Product";
import ParentProduct from "./components/ParentProduct";
import OrderList from "./components/OrderList";
import classes from "./App.module.css"


function App() {
  return (
    <div className={classes.doc}>
      <ParentProduct>
        {/* <Product/> */}
      </ParentProduct>
      <OrderList/>
    </div>
  );
}

export default App;
