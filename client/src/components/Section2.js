import React from "react";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2-container">
      <h2 className="section2-title">WHAT CUSTOMERS SAY</h2>
      <div className="section2-card-container">
        <div className="section2-card white-card">
          <h3 className="section2-card-title">BEST SALON EXPERIENCE EVER</h3>
          <p className="section2-card-text">
          "Booking my appointment online was so easy. I loved how I could choose my stylist and preferred time slot. The salon staff was ready for me as soon as I arrived. Perfect!"
          </p>
        </div>
        <div className="section2-card gold-card">
          <h3 className="section2-card-title white-title">Quick and hassle-free!</h3>
          <p className="section2-card-text white-text">
            <span className="white-title">"The booking system is amazing! No more long calls to schedule appointments. I selected my date, time, and services in just a few clicks. Loved the seamless experience!"</span>
          </p>
        </div>
        <div className="section2-card white-card">
          <h3 className="section2-card-title">Amazing service and convenience!</h3>
          <p className="section2-card-text">
          "The app made booking so much easier. I was able to book my haircut during a coffee break. The reminders were a nice touch too. Great for busy people like me!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
