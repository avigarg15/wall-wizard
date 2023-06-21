import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductList from '../components/getProducts';
import '../styles/estimateForm.css'
const EstimateForm = () => {
  const [city, setCity] = useState('');
  const [space, setSpace] = useState('');
  const [bhk, setBHK] = useState('');
  const [carpetArea, setCarpetArea] = useState('');
  const [paintRequired, setPaintRequired] = useState(null);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/getProductInfo", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "allData")
        setData(data.data);
      });
  }, []);


  const handleSubmit = async (event) => {


    const coveragePerUnit = 75; // Square units per unit of paint
    const areaInSquareMeters = carpetArea;
    const paintRequired = Math.ceil(areaInSquareMeters / coveragePerUnit);

    // Set the calculated paintRequired value
    setPaintRequired(paintRequired);

    event.preventDefault();
    axios.post('http://localhost:8080/postabc', {
      city, space, bhk, carpetArea
    })
  };

  // const handleImageChange = (event) => {
  //   const selectedImage = event.target.files[0];
  //   setImage(selectedImage);
  // };
  // const calculatedPlace = size * 110;

  return (
    <>
      <div className="form1">


        <div className="form-container1">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="city">Select Your City</label>
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="">Select Your City</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="chennai">Chennai</option>
                <option value="noida">Noida</option>
              </select>
            </div>
            <div>
              <label htmlFor="space">Select Space</label>
              <select
                id="space"
                value={space}
                onChange={(e) => setSpace(e.target.value)}
                required
              >
                <option value="">Select Space</option>
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>

              </select>
            </div>
            <div>
              <label htmlFor="bhk">Select No of BHK</label>
              <select
                id="bhk"
                value={bhk}
                onChange={(e) => setBHK(e.target.value)}
                required
              >
                <option value="">Select No. of BHK</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk+">4 BHK</option>
                {/* <option value="noida">Noida</option> */}
              </select>
            </div>


            <div>
              <label htmlFor="price">Carpet Area:</label>
              <input
                type="number"
                id="carpetArea"
                value={carpetArea}
                onChange={(e) => setCarpetArea(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        {paintRequired !== null && (
          <div className="result-container">
            The amount of paint required is {paintRequired} Litre.
          </div>
        )}


      </div>


      <ProductList />
    </>
  );
};

export default EstimateForm;
