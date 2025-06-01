import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          WHERE STYLE <br />MEETS <br />
          <span className="perfection">Perfection</span>
        </h1>
        <button className="contact-btn" onClick={scrollToContact}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
