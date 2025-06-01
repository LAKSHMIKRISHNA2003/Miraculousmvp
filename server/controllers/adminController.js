const db = require("../config/dbConfig");

// Admin login handler
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Fetch admin data from DB
    const [rows] = await db.query("SELECT * FROM Admins WHERE username = ?", [
      username,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Username not found" });
    }

    const admin = rows[0];

    // Compare plain text password (use hashed passwords in production)
    if (password !== admin.password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Successful login
    return res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { login };
