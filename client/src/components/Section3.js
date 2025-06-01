import React from "react";
import "./Section3.css";

const Section3 = () => {
  return (
    <div className="section3-container">
      <h2 className="section3-title">LOCATION</h2>
      <div className="map-container">
        <iframe
          title="Google Maps Preview"
          
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.0294649843327!2d-94.8051024!3d32.52536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863639eeaa68d323%3A0x40d01d750f0551d7!2sMiraculous%20MVP%20Kutz%20%26%20Salon!5e0!3m2!1sen!2sin!4v1733207308415!5m2!1sen!2sin" 
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
    </div>
  );
};

export default Section3;
