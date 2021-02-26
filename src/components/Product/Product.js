import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

function Product(props) {
  const { img, name, price, seller, stock } = props.product;
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
        <p>only {stock} in stock order soon</p>
        <button
          className="main-butn"
          onClick={() => {
            props.handelAddProduct(props.product);
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to card
        </button>
      </div>
    </div>
  );
}

export default Product;
