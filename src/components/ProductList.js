import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <ProductItem />
        </div>
      </div>
    </>
  );
};

export default ProductList;
