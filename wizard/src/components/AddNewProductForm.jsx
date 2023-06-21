import React, { useState } from "react";
import axios from 'axios';
import '../styles/ProductForm.css'
const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [finish, setFinish] = useState('');
  const [quality, setQuality] = useState('');
  const [coverage, setCoverage] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    axios.post('http://localhost:8080/postxyz', {
      productName, brand, size, price, finish, quality, coverage, color, image
    })
  };

  // const handleImageChange = (event) => {
  //   const selectedImage = event.target.files[0];
  //   setImage(selectedImage);
  // };
  const calculatedPlace = size * 110;

  return (
    <div className="form">


      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="size">Size:</label>
            <select
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              required
            >
              <option value="">Select Size</option>
              <option value="1kg">1Kg</option>
              <option value="2kg">2Kg</option>
              <option value="5kg">5Kg</option>
              <option value="10kg">10Kg</option>
              <option value="20kg">20Kg</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="finish">Finish:</label>
            <input
              type="text"
              id="finish"
              value={finish}
              onChange={(e) => setFinish(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="quality">Quality:</label>
            <select
              id="quality"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              required
            >
              <option value="">Select Quality</option>
              <option value="economy">Economy</option>
              <option value="standard">Standard</option>
              <option value="advance">Advance</option>
            </select>
          </div>
          <div>
            <label htmlFor="coverage">Coverage:</label>
            <input
              type="number"
              id="coverage"
              placeholder={calculatedPlace}
              value={coverage}
              onChange={(e) => setCoverage(parseFloat(e.target.value))}
              required
            />
          </div>
          <div>
            <label htmlFor="color">Colour Name:</label>
            <input
              type="text"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
