import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import happyImage from "../../images/giphy.gif";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlace, setOrderPlace] = useState(false);
  const handelPlaceOrder = () => {
    setCart([]);
    setOrderPlace(true);
    processOrder();
  };
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);
  const removeItem = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  let thankYou;
  if (orderPlace) {
    thankYou = <img src={happyImage} alt="" srcset="" />;
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((pd) => (
          <ReviewItem
            removeItem={removeItem}
            key={pd.key}
            product={pd}
          ></ReviewItem>
        ))}
        {thankYou}
      </div>
      <div className="chart-container">
        <Cart cart={cart}>
          <button
            onClick={handelPlaceOrder}
            className="main-butn"
            type="submit"
          >
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
