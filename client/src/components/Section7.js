import React from "react";
import "./Section7.css"; // CSS file for styling

const Section7 = () => {
  return (
    <div id="contact"className="section7-container">
      <h2 className="form-title">WRITE TO US</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact No</label>
          <input type="tel" id="contact" name="contact" placeholder="Your Contact Number" required />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea id="comments" name="comments" rows="4" placeholder="Your Comments" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Section7;
