import React, { useEffect, useState } from 'react';
import '../styles/getproduct.css';

const DuluxProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getProductInfo", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData, "ProductData");
        const filteredData = responseData.data.filter((item) => item.brand === "Dulux");
        setData(filteredData);
      });
  }, []);

  return (
    <div className="product-container">
      {data.map((item) => (
        <div key={item._id}>
          <h3>{item.productName}</h3>
          <p>Brand: {item.brand}</p>
          <p>Size: {item.size}</p>
          <p>Price: {item.price}</p>
          <p>Finish: {item.finish}</p>
          <p>Quality: {item.quality}</p>
          <p>Coverage: {item.coverage}</p>
          <p>Color: {item.color}</p>
        </div>
      ))}
    </div>
  );
};

export default DuluxProducts;
