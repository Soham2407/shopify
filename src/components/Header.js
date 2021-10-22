import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mt-2 ms-4">
      <Link to="/">
        <h1>Shopify</h1>
      </Link>
      <hr />
    </div>
  );
};

export default Header;
