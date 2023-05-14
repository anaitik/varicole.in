import React from 'react';
import './css/ContactUsPage.css';

const ContactUsPage = () => {
  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">Please fill out the form below to get in touch.</p>
      <form className="contact-us-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="contact-us-input" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="contact-us-input" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="contact-us-textarea"></textarea>
        </div>
        <button type="submit" className="contact-us-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
