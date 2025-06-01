import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Admin.css";

const AdminDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [error, setError] = useState(""); // To handle error messages
  const navigate = useNavigate();

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const fetchAppointments = async (date) => {
    const formattedDate = formatDate(date);
    try {
      const response = await fetch(
        `http://localhost:5000/appointments?date=${formattedDate}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch appointments");
      }

      const data = await response.json();
      setFilteredAppointments(data.appointments); // Set appointments
      setError(""); // Clear previous errors
    } catch (error) {
      console.error("Error fetching appointments:", error.message);
      setError("Unable to fetch appointments. Please try again later.");
      setFilteredAppointments([]); // Clear appointments on error
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchAppointments(date); // Fetch appointments for the selected date
  };

  useEffect(() => {
    fetchAppointments(selectedDate); // Fetch appointments on page load
  }, [selectedDate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Remove the authentication token
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="admin-dashboard">
      <h2 className="admin-title">Admin Dashboard</h2>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
      <div className="calendar-section">
        <h3>Select a Date</h3>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          className="calendar"
        />
      </div>

      <div className="appointments-section">
        <h3>Appointments for {formatDate(selectedDate)}</h3>
        {error && <p className="error-message">{error}</p>}
        {filteredAppointments.length > 0 ? (
          <ul className="appointments-list">
            {filteredAppointments.map((appointment, index) => (
              <li key={index} className="appointment-item">
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
                <p>
                  <strong>Name:</strong> {appointment.name}
                </p>
                <p>
                  <strong>Email:</strong> {appointment.email}
                </p>
                <p>
                  <strong>Contact:</strong> {appointment.contact}
                </p>
                {appointment.comments && (
                  <p>
                    <strong>Comments:</strong> {appointment.comments}
                  </p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          !error && <p>No appointments for this date.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
