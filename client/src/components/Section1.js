import React from "react";
import "./Section1.css"; // Assuming you create a CSS file for styling

// Import images
import img1 from '../assets/images/08.png';
import img2 from '../assets/images/09.png';
import img3 from '../assets/images/10.png';
import img4 from '../assets/images/11.png';

const Services = () => {
  const cards = [
    { title: "CLIPPER SHAVE", price: "10$", time: "10MIN", image:img1, link: "/appointment" },
    { title: "STRAIGHT RAZOR SHAVE", price: "15$", time: "15MIN", image: img3, link: "/appointment" },
    { title: "MENS'S HAIRCUT", price: "25$", time: "30MIN", image:img2, link: "/appointment" },
    { title: "KIDS HAIRCUT", price: "20$", time: "60MIN", image:img4, link: "/appointment#" },
  ];

  return (
    <div id="services"className="services-section">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-cards">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className="services-card"
          >
            <img
              src={card.image}
              alt={card.title}
              className="services-card-image"
            />
            <div className="services-card-content">
              <h3>{card.title}</h3>
              <p>
                {card.price} | {card.time}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
