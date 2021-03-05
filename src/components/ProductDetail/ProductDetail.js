import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { productKey } = useParams();
  const showAddToCart = false;
  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);
  return (
    <div>
      <Product showAddToCart={showAddToCart} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
