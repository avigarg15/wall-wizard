import React from 'react';
import '../styles/Card.css'; // Assuming you have a separate CSS file for styling

const Card = ({ image, number , text }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={`Image ${number}`} />
      </div>
      <div className="number">{number}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Card;
