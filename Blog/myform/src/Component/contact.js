import React, { useState } from 'react';
import './style.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <card>
      <div className="contact-form">
        <form id="form" onSubmit={handleSubmit}>
          <label>Email: </label><br /><br />
          <input id="cont" type="email" name="email" placeholder="Enter your email" onChange={handleChange} value={formData.email} /><br /><br />
          <label>First Name: </label><br /><br />
          <input id="cont" type="text" name="firstName" placeholder="Enter your first name" onChange={handleChange} value={formData.firstName} /><br /><br />
          <label>Last Name: </label><br /><br />
          <input id="cont" type="text" name="lastName" placeholder="Enter your last name" onChange={handleChange} value={formData.lastName} /><br /><br />
          <label>Phone number: </label><br /><br />
          <input id="cont" type="text" name="phoneNumber" placeholder="Enter your phone number" onChange={handleChange} value={formData.phoneNumber} /><br /><br /><br />
          <button id="sub" type="submit">Send Message</button>
        </form>
        <span className="span">
          <a href="https://instagram.com/"><img className="con" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="Instagram" /></a>
          <a href="https://whatsapp.com/"><img className="con" src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLW5lb24tMDA0LnBuZw.png" alt="WhatsApp" /></a>
          <a href="https://twitter.com/"><img className="con" src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" /></a>
        </span>
      </div>
      </card>
      <div className="contact-form">
        <img id="img" src="https://play-lh.googleusercontent.com/Zw2EmfHE_pUKtdMhHOOIn__DdsgKsd82guAvC5ei6WLjdMpqToe2LxE7_4TBvHe_s6c" alt="images/blog.png" />
      </div>
    </div>
  );
}
