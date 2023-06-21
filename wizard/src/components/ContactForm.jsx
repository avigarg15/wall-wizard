//wPFXlH7uf2el 
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/contact.css';
// import Feedback from './Feedback';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (event) => {


    axios.post('http://localhost:8080/postContactInfo', {

      name, phone, email, city
    })
  };

  return (
    <>
      <div className="contact-container">
        {/* <img src="/backgroundcontact.jph.jpg" className='contactImage'></img> */}
        <div className="background-image">
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="City"
              name="city"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

    </>
  );
};

export default ContactForm;
