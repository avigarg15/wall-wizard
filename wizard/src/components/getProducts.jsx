import React, { useEffect, useState } from 'react';
import '../styles/getproduct.css';


const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getProductInfo", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "ProductData");
        setData(data.data);
      });
  }, []);



  return (
    <div className="product-container">
      {data.map(i => (
        <div key={i._id} >
          <h3>{i.productName}</h3>
          <p>Brand: {i.brand}</p>
          <p>Size: {i.size}</p>
          <p>Price: {i.price}</p>
          <p>Finish: {i.finish}</p>
          <p>Quality: {i.quality}</p>
          <p>Coverage: {i.coverage}</p>
          <p>Color: {i.color}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
