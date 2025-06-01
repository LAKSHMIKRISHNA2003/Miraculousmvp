const express = require("express");
const {
  getAppointmentsByDate,
} = require("../controllers/fetchAppointmentController");

const router = express.Router();

// Route for fetching appointments by date
router.get("/", getAppointmentsByDate);

module.exports = router;
