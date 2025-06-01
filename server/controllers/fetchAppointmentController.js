// const db = require("../config/dbConfig");

// // Function to fetch appointments by a specific date
// const getAppointmentsByDate = (req, res) => {
//   const { date } = req.query;

//   // Validate the date parameter
//   if (!date) {
//     return res.status(400).json({
//       error: "Date parameter is required",
//     });
//   }

//   // Query to fetch appointments for the specific date
//   const query = `
//     SELECT * FROM bookings WHERE date = ?
//   `;
//   db.query(query, [date], (err, results) => {
//     if (err) {
//       console.error("Database Fetch Error:", err.message);
//       return res.status(500).json({ error: "Database error occurred" });
//     }

//     res.status(200).json({
//       message: "Appointments fetched successfully",
//       appointments: results,
//     });
//   });
// };

// module.exports = { getAppointmentsByDate };


const db = require("../config/dbConfig");

// Function to fetch appointments by a specific date
const getAppointmentsByDate = async (req, res) => {
  const { date } = req.query;

  // Validate the date parameter
  if (!date) {
    return res.status(400).json({
      error: "Date parameter is required",
    });
  }

  try {
    // Query to fetch appointments for the specific date
    const query = `SELECT * FROM bookings WHERE date = ?`;
    const [results] = await db.query(query, [date]);

    res.status(200).json({
      message: "Appointments fetched successfully",
      appointments: results,
    });
  } catch (err) {
    console.error("Database Fetch Error:", err.message);
    res.status(500).json({ error: "Database error occurred" });
  }
};

module.exports = { getAppointmentsByDate };

