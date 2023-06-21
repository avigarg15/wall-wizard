import React from 'react';
import '../styles/Products.css';

const CardForProducts = ({ image, text, link }) => {
  return (
    <div className="card1">
      <div className="image-container1">
        <a href={link}><img className="productCard-image1" alt="a" src={image} /></a>
      </div>
      <div className="text1">{text}</div>
    </div>
  );
};

export default CardForProducts;
