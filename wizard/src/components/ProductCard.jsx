import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ image, text }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img className="productCard-image" alt="a" src={image} />
      </div>
      <div className="text">{text}</div>
    </div>
  );
};

export default ProductCard;
