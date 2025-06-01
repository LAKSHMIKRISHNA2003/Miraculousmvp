const db = require("../config/dbConfig");

// Function to handle appointment scheduling
const scheduleAppointment = async (req, res) => {
  const { date, time, name, email, contact, message } = req.body;

  // Validate required fields
  if (!date || !time || !name || !email) {
    return res.status(400).json({
      error: "All fields (date, time, name, email) are required",
    });
  }

  try {
    // Insert data into the database
    const [result] = await db.query(
      `INSERT INTO bookings (date, time, name, email, contact, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [date, time, name, email, contact, message]
    );

    res.status(201).json({
      message: "Appointment scheduled successfully",
      appointment: {
        id: result.insertId,
        date,
        time,
        name,
        email,
        contact,
        message,
      },
    });
  } catch (err) {
    console.error("Database Insert Error:", err.message);
    res.status(500).json({ error: "Database error occurred" });
  }
};

module.exports = { scheduleAppointment };
