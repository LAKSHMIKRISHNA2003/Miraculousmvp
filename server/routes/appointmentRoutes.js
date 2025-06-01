const express = require("express");
const { scheduleAppointment } = require("../controllers/appointmentController");

const router = express.Router();

// Route to schedule an appointment
router.post("/", scheduleAppointment);

// Test route for debugging
router.get("/", (req, res) => {
  res.send("Appointment API is working!");
});

module.exports = router;
