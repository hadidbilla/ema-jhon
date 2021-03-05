import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  const { img, name, price, seller, stock, key } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="product-name">
        <h4>
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>by {seller}</small>
        </p>
        <br />
        <p>${price}</p>
        <p>only {stock} in stock order soon</p>
        {props.showAddToCart && (
          <button
            className="main-butn"
            onClick={() => {
              props.handelAddProduct(props.product);
            }}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Add to card
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
