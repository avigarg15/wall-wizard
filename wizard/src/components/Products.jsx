import React from "react";
import CardForProducts from "./CardForProducts";
// import '../styles/categories.css';
import ProductCard from './ProductCard';
const Products = () => {

  const cardsData2 = [
    { image: '/asian.jpg', text: 'Asain Paints', link: '/asainProducts' },
    { image: '/dulux.jpg', text: 'Dulux Paints', link: '/duluxProducts' },
    { image: '/berger.jpg', text: 'Berger Paints', link: '/bergerProducts' },
    { image: '/indigo.jpg', text: 'Indigo Paints', link: '/indigoProducts' },
    { image: '/shalimar.jpg', text: 'Shalimar Paints', link: '/shalimarProducts' },
    // Add data for other cards
  ];
  const cardsData3 = [
    { image: '/Paint_Products.gif', text: 'Free Survey & Quotation' },
    { image: '/Paint Calculator.gif', text: 'Accept Quotaion' },
    { image: '/Color Visualizer.gif', text: 'Online Colour consultation' },
    { image: '/Textures.gif', text: 'Painting Begins' },
    { image: '/Interior Painting.gif', text: 'Finishing and Handover' },
    { image: '/Exterior Painting - 1.gif', text: 'Finishing and Handover' },
    { image: '/Stencils.gif', text: 'Finishing and Handover' },
    { image: '/Water Proofing - 1.gif', text: 'Finishing and Handover' },
    { image: '/Wood Painting.gif', text: 'Finishing and Handover' },
    { image: '/Metal Painting - 1.gif', text: 'Finishing and Handover' },
    // Add data for other cards
  ];
  return (
    <>
      <h6 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'grey', fontSize: '30px', marginTop: '20px', marginBottom: '10px', padding: '20px', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: '1.1', fontWeight: '500' }}>Paint Brands</h6>
      <div className="fleq1">
        {cardsData2.map((card, index) => (
          <CardForProducts key={index} image={card.image} text={card.text} link={card.link} />
        ))}
      </div>
      <h6 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'black', fontSize: '25px', marginTop: '10px', backgroundColor: '#F2F2F2', padding: '20px', boxSizing: 'border-box' }}>PRODUCTS AND SERVICES</h6>

      <div className="fleq">
        {cardsData3.map((card, index) => (
          <ProductCard key={index} image={card.image} text={card.text} />
        ))}
      </div>


      <h6 style={{ position: 'relative', top: '21.5%', textAlign: 'center', color: 'grey', fontSize: '30px', marginTop: '20px', marginBottom: '10px', padding: '20px', boxSizing: 'border-box', fontFamily: 'inherit', lineHeight: '1.1', fontWeight: '500' }}>Different Categories</h6>

      <div className="photo-container" style={{ display: 'flex', gap: '10px' }}>
        <img src="cover.jpg" alt="First Landscape" className="landscape-photo" style={{ width: '45%', height: 'auto', border: '1px solid black', borderRadius: '10px', marginLeft: 'auto' }} />
        <img src="cover2.jpg" alt="Second Landscape" className="landscape-photo" style={{ width: '45%', height: 'auto', border: '1px solid black', borderRadius: '10px', marginRight: 'auto' }} />
      </div>



    </>
  );

};

export default Products;