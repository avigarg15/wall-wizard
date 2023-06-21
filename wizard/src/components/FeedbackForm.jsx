//wPFXlH7uf2el 
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/feedback.css';

const FeedbackForm = () => {
  const [firstName, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [secondName, setsecondName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {


    axios.post('http://localhost:8080/postFeedbackInfo', {

      firstName, phone, email, secondName, description
    })
  };

  return (
    <>
      <div className="contact-container1">
        {/* <img src="/backgroundcontact.jph.jpg" className='contactImage'></img> */}
        {/* <div className="background-image">
        </div> */}
        <div className="contact-form1">
          <h2>Feedback Form</h2>
          <h5>Please help us improve our service by filling out this name</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="second Name"
              name="secondName"
              id="secondName"
              value={secondName}
              onChange={(e) => setsecondName(e.target.value)}
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
            <textarea rows={4} cols={50}

              type="text"
              placeholder="Description"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

    </>
  );
};

export default FeedbackForm;
