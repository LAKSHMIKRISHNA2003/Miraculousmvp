import React from "react";
import "./Section4.css"; // Import the CSS file for styling

const Section4 = () => {
  const timings = [
    { day: "Monday", hours: "7 AM - 10 PM" },
    { day: "Tuesday", hours: "7 AM - 10 PM" },
    { day: "Wednesday", hours: "7 AM - 10 PM" },
    { day: "Thursday", hours: "7 AM - 10 PM" },
    { day: "Friday", hours: "7 AM - 10 PM" },
    { day: "Saturday", hours: "7 AM - 10 PM" },
    { day: "Sunday", hours: "7 AM - 10 PM" },
  ];

  return (
    <div className="section4-container">
      {/* Left Section */}
      <div className="section4-left">
        <h1>
          We Don't <span className="highlight">CUT</span>
          <br />
        We <span className="highlight">STYLE</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className="section4-right">
        <div className="timings-header">TIMINGS</div>
        <table className="timings-table">
          <tbody>
            {timings.map((timing, index) => (
              <tr key={index}>
                <td>{timing.day}</td>
                <td>{timing.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Section4;
