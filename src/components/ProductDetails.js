import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  setSelectedProduct,
} from "../redux/actions/productAction";

const ProductDetails = () => {
  const product = useSelector((state) => state.allProducts.selectedProduct);

  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(setSelectedProduct(response.data));
  };

  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, []);

  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          <div className="col">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "500px" }}
            />
          </div>
          <div className="col">
            <h1>{product.title}</h1>
            <h2 className="mt-3 mb-3">${product.price}</h2>
            <div class="alert alert-secondary text-danger" role="alert">
              {product.category}
            </div>
            <div>
              <p style={{ fontSize: "18px" }}>{product.description}</p>
            </div>
            <div>
              <button type="button" class="btn btn-danger">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
