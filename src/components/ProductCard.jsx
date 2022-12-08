import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Button from "./Button";

import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card_image">
          <img src={props.img01} alt="" />
        </div>
        <h3 className="product-card_name">{props.name}</h3>
        <div className="product-card_price">
          {numberWithCommas(props.price)}
        </div>
      </Link>
      <div className="product-card_btn">
        <Button size="sm" icon="bx bx-cart" animate={true}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
