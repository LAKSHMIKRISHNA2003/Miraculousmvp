import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Appointment.css";

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    comments: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const timeSlots = ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointment = {
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      ...formData,
    };

    try {
      const response = await fetch("http://localhost:3000/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment),
      });
      if (response.ok) {
        // Show thank-you section
        setIsSubmitted(true);
      } else {
        alert("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleBookAnother = () => {
    // Redirect to the same page (appointment page)
    navigate("/appointment");
    // Reset state values
    setIsSubmitted(false);
    setSelectedDate(null);
    setSelectedTime("");
    setFormData({ name: "", email: "", contact: "", comments: "" });
  };

  return (
    <div className="appointment-page">
      <h2 className="title">Book an Appointment</h2>

      {!isSubmitted ? (
        <>
          <div className="calendar-section">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              className="calendar"
            />
          </div>

          {selectedDate && (
            <div className="time-slot-section">
              <h3>Available Time Slots</h3>
              <div className="time-slots">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    className={`time-slot ${
                      selectedTime === slot ? "selected" : ""
                    }`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {selectedTime && (
            <div className="form-section">
              <h3>Enter Your Details</h3>
              <form onSubmit={handleSubmit} className="appointment-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact No"
                  value={formData.contact}
                  onChange={handleFormChange}
                  maxLength={10} // Optional: Limit to 10 digits
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault(); // Prevent characters other than numbers
                    }
                  }}
                  pattern="[0-9]{10}" // Validate for exactly 10 digits
                  title="Contact number must be 10 digits"
                  required
                />
                <textarea
                  name="comments"
                  placeholder="Comments"
                  value={formData.comments}
                  onChange={handleFormChange}
                />
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          )}
        </>
      ) : (
        <div className="thank-you-section">
          <h3>Thank You for Booking an Appointment!</h3>
          <p>Your appointment has been successfully booked.</p>
          <div className="thank-you-buttons">
            <button
              onClick={() => (window.location.href = "/")}
              className="home-button"
            >
              Home Page
            </button>
            <button
              onClick={handleBookAnother}
              className="another-appointment-button"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentPage;
