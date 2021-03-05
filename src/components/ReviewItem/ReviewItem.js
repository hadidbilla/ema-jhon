import React from "react";
import Cart from "../Cart/Cart";

const ReviewItem = (props) => {
  const { name, quantity, price, seller, img, key } = props.product;

  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="product-name">
        <h4>{name}</h4>
        <br />
        <p>
          <small>by {seller}</small>
        </p>
        <br />
        <p>${price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => props.removeItem(key)} className="main-butn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
