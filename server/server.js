  const express = require("express");
  const cors = require("cors");
  const bodyParser = require("body-parser");
  const path = require("path");
  const appointmentRoutes = require("./routes/appointmentRoutes");
  const fatch = require("./routes/fetchAppointmentRoutes");
  const adminRoutes = require("./routes/adminRoutes");

  const app = express();
  const PORT = process.env.PORT || 5000;

  // Middleware
  app.use(cors());
  app.use(bodyParser.json());

  // API routes
  app.use("/appointments", appointmentRoutes);
  app.use("/fatch-appointments", fatch);
  app.use("/admin", adminRoutes);


  // Serve React static files (in production)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
  }

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
