import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    return (
      <div className=" col-lg-3 col-md-4 col-sm-6 col-xs-6" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <div className="card mt-3 mb-3">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ width: "100%" }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductItem;
