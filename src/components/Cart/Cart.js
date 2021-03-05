import React from "react";

import "./Cart.css";

function Cart(props) {
  const cart = props.cart;

  const total = cart.reduce((total, product) => total + product.price, 0);
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }
  const tax = (total / 10).toFixed(2);
  let grandTotal = (total + shipping + Number(tax)).toFixed(2);

  return (
    <div>
      <div className="first">
        <h2>Order Summery</h2>
        <h3>Order Items: {cart.length}</h3>
      </div>
      <div className="second">
        <p>
          Shipping and Handling: <span>{shipping}</span>
        </p>
        <p>
          Total Before Tax: <span>{total}</span>
        </p>
        <p>
          Estimated Tax: <span>{tax}</span>
        </p>
      </div>
      <h4>
        Order Total: <span>{grandTotal}</span>
      </h4>
      <br />
      {props.children}
    </div>
  );
}

export default Cart;
