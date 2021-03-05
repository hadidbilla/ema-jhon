import React, { useEffect } from "react";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import { useState } from "react";
import "./Shop.css";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

function Shop() {
  const data10 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(data10);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(previousCart);
  }, []);
  const handelAddProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const other = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...other, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            key={pd.key}
            showAddToCart={true}
            handelAddProduct={handelAddProduct}
            product={pd}
          ></Product>
        ))}
      </div>
      <div className="chart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="cart-butn">Review your Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
}

export default Shop;
