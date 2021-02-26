import React from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import { useState } from "react";
import "./Shop.css";
import Cart from "../Cart/Cart";

function Shop() {
  const data10 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(data10);
  const [cart, setCart] = useState([]);
  const handelAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            handelAddProduct={handelAddProduct}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="chart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default Shop;
